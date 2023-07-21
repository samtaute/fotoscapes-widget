/* jshint esversion: 6 */
/* jshint node: true */
/* global localStorage */

// This project is tasked with personalizing the lookbook content
// shown to the users on the FSD and on the web portal. Each day there
// is a list of possible lookbooks that the user could potentially
// view and we want to give them a set of 4-6 lookbooks they are more
// likely to choose. To make these selections we use the user's
// previous viewing behavior to categorize their interests and then
// use this information to select 4-6 lookbooks from today's list of
// lookbooks. If we do this well the user is more likely to see
// content they like and we in turn increase our ad avails and
// therefore our income. This should be a win win.
//
// The chosen architectural approach is to have code running in the
// browser which queries a service and gets the set of Lookbooks
// currently scheduled to be available today. Each lookbook has a set
// of interests associate with it. For each user we keep a list of
// interests and the likelihood they would like to view content in
// this interest. We prioritize the lookbooks based on these user
// interest weights and select appropriate lookbooks to show to the
// user. Each time the user chooses to view a lookbook we update the
// weights on each interests to aid is future selections. Over time
// our weights match their viewing behavior and each user is shown a
// personalized selection of lookbooks. This approach has worked very
// well in the Lookbk iOS app.
//
// This strategy has three nice properties. The first is that it is
// very scalable. The lookbook list that each client is fetching is
// they same as everyone else and therefore we can cache the data on
// CloudFront.  This means that the backing server is lightly
// loaded. The second great property of this approach is that it makes
// no other external demands on the rest of Mobile Posse's infra-
// structure. All interest data is stored locally on the client device
// and all decisions are made locally without additional server
// support. Finally, this design does not need accurate user identity
// since the work is done locally without knowing who the user is.
//
// The primary alternative would be to do this server side. We would
// then need to push all the user's behavior to the server. Next we
// would have to store their interest weights, look them up when the
// user queries the server, prioritize the list specifically for them
// and return it to the user. The servers would have to scale with the
// number of users since caching can no longer be effective. Finally,
// this solution forces accurate user identity to allow us to store
// and lookup the interest information based on each user.
//
// To support the chosen strategy we have built a React component
// based on the existing Dynamic Content Module's Feed component. It
// does all the steps outlined above. The only parameter this React
// component requires is “url” which is where we fetch the information
// on lookbooks available for viewing today.
//
// We do have additional parameters that can be configured to control
// how the personalization operations (how fast to follow the user’s
// selections, how much variation we show the user, etc.) but all
// these parameters have good initial defaults and my component will
// run without you specifying them beforehand.
//
// The JSON data feed used by personalization has the format:
//
// {
//   "ver": "1.0",
//   "interests": {
//     "uid-1234": { "name": {"en": "Women"},         "weight": 0.065 },
//     "uid-3456": { "name": {"en": "Women's Style"}, "weight": 0.04 },
//     ... the rest of the interests ...
//   },
//   "items": [
//     {
//       "title": { "en": "The Dazzling Danielle Herrington" },
//       "summary": { "en" : "Beyond their natural beauty ..." },
//       "link": "https://fotoscapes.com/mp/lookbook/Rqfamru3",
//       "uid": "Rqfamru3"
//       "interests": [ "uid-1234", "uid-3456" ],
//       "owner": "Lookbk",
//       "brandLogo": "https://lkbk-assets-cdn.myfirstly.com/32DX1ad.jpg",
//       "numImages": 4,
//       "promote": false,
//       "boost": 0.0,
//       "images": [
//         {
//           "link": "https://lkbk-assets-cdn.myfirstly.com/AApg9xf.jpg",
//           "height": 600,
//           "width": 1350
//         },
//         ... more images ...
//       ],
//       "previews": [
//         {
//           "link": "https://lkbk-assets-cdn.myfirstly.com/p6fWgRA.jpg",
//           "height": 300,
//           "width": 675
//         },
//         ... more previews ...
//       ],
//       "kb": {
//         "startX": 0.6444,
//         "startY": 0.3551,
//         "startB": 0.2370,
//         "endX": 0.6444,
//         "endY": 0.3551,
//         "endB": 0.2370
//       },
//     },
//     ... more items ...
//   ]
// }
//
// This library is designed to support vendors/personalfeed.js.
//
// The code is organized in the approximate order of first use while
// running. Each section is labeled in the words shown in all caps.
//
// PUBLIC: The first section has several public API functions.
// choose() sorts the available lookbooks in priority order based on
// the user's preferences. chooseText() selects text based on type of
// translation data and browser language.  click() updates the user's
// preferences based on the recently selected lookbook (a user click).
// Finally, findImage() is used to pick the best preview to use.
//
// CHOOSE: Function to perform the core end-to-end algorithm.
//
// SCORING: Take the list of available lookbooks and score each one
// based on the user's preferences.
//
// SELECTION: Prioritize and select the lookbooks to show the user
// based on their score (and some randomness).
//
// UPDATE_WEIGHTS: Update user interest weights based on the lookbooks
// they choose to look at.
//
// LOGGING: Logs the choices this library makes.
//
// DEBUGGING: Output debugging information for testing.
//
// STORAGE: Read and write local storage with personalized data.

// localStorage key name.
const localStorageKeyName = 'personalize-user-weights'

let personalizeDebug = false // True if we are debugging.
const personalizeInstances = [] as any // List of instances used.

// This object personalizes Lookbook content by choosing Lookbooks the
// user is more likely to view.
export function NewPersonalize() {
  const instance = {
    count: 4, // Default number of lookbooks to show.
    level0Multiplier: 2.0, // Increase primary interest over remaining ones.
    initialValue: 0.5, // Initial value to use when interest is missing.
    hitValue: 2, // Use if the interest is matched.
    missValue: 0.0001, // Use if the interest is not matched.
    initialWeight: 0.001, // Initial weight for brand new interests.
    filterConst: 0.95, // Low pass filter constant.
    deprioritization: 0.2, // Percentage to deprioritization after use.
    noInterestsValue: 0.01, // Value to use when interests missing.
    scoreBoostExponent: 1.9, // Exponent to boost scores by.
    interestValueFloor: 0.1, // Minimum value an interest can get to.
    lastAverage: 0, // Last average score.
    maxConsidered: 50, // Maximum number of posts to consider.
    defaultInterests: {} as any, // Default interests to use.
    debug: false, // True to output debugging.
    posts: [], // Posts being processed.
    scored: [], // List of scored lookbooks.
    lastEvent: null, // Last log event.
    lastUserWeights: null, // Last user weights.
    scoreBoost: null,

    //--------------------------------------------------------------------
    // PUBLIC: These routines are the public interface for Personalize.
    //--------------------------------------------------------------------

    // Take the available lookbooks and return the best lookbooks to
    // show the user. Pick up many of the operational parameters from
    // the React props variable.
    //
    // This routine takes the following parameters from props:
    // {
    //   settings: {
    //     count: 4,                 // Default number of lookbooks to show.
    //     maxConsidered: 20,        // Maximum number of posts to consider.
    //     interest: {
    //       level0_multiplier: 2.0, // Increase primary interest over remaining.
    //       initial: 0.5,           // Value to use when interest is missing.
    //       hit: 2,                 // Use if the interest is matched.
    //       miss: 0.0001,           // Use if the interest is not matched.
    //       filter_const: 0.95,     // Low pass filter constant.
    //       deprioritization: 0.2,  // Percentage to deprioritization after use.
    //       no_interests: 0.01,     // Value to use when interests missing.
    //       scoreBoost: 1.9,        // Exponent to boost scores by.
    //     },
    //   },
    //
    //   posts: [                    // List of available posts.
    //     {
    //       title: "Some Title",    // Title of Lookbook.
    //       summary: "Summary",     // Title of Lookbook.
    //       url: "<<lkbkurl>>",     // URL to Lookbook for viewing.
    //       uid: "Rqfamru3",        // UID of Lookbook.
    //       interests: ["u1","u2"], // Lookbook's interests.
    //       source: "Lookbk",       // Source of Lookbook
    //       image: "<<imgurl>>",    // Preview image.
    //     },
    //     ... more Lookbooks
    //   ],
    // }
    choose: function (posts: any, settings: any, defaultInterests: any) {
      this.posts = posts

      // Setup defaults from props or initial values.
      const interest = settings.interest || {}
      this.count = settings.count || this.count
      this.maxConsidered = settings.maxConsidered || this.maxConsidered
      this.level0Multiplier = interest.level0_multiplier || this.level0Multiplier
      this.initialValue = interest.initial || this.initialValue
      this.hitValue = interest.hit || this.hitValue
      this.missValue = interest.miss || this.missValue
      this.filterConst = interest.filter_const || this.filterConst
      this.deprioritization = interest.deprioritization || this.deprioritization
      this.noInterestsValue = interest.no_interests || this.noInterestsValue
      this.scoreBoost = interest.scoreBoost || this.scoreBoost
      this.defaultInterests = defaultInterests

      // Now run the end-to-end selection algorithm.
      return this.performChoose(posts)
    },

    // Choose text based on type of translation data and browser
    // language.  If 'translations' is a string then we should return it
    // (we don't have any other translations). If we have no
    // 'languageCode' then return the English translation.
    //
    // The second parameter is optional and if missing it defaults to
    // the browser's default language.
    chooseText: function (translations: any, languageCode = navigator.language) {
      // If the translations are a plain string assume this string is
      // the necessary translation.
      if (typeof translations === 'string') {
        return translations
      }

      // If translations is not an object then we have been passed bad
      // data and return error message.
      if (typeof translations !== 'object') {
        return 'Bad translation information'
      }

      // NOTE: Temporary patch. (BB 06/2020)
      // Ask: Provided any translation exists but none exists for the page's language, fallback to the first available one.
      // This is because this data structure was built to work on fotoscapes pages which are prerendered and then updated based
      // on browser values.

      const translationKeys = Object.keys(translations)
      // If we get an empty object, return an empty string.
      if (translationKeys.length === 0) {
        return ''
      }

      const translation = translations[languageCode] ?? translations[translationKeys[0]]
      return translation
    },

    // Process the user's click to show the lookbook. We update the
    // users interest weights, save it in the local storage and then
    // call the click routine.
    click: function (uid: any, interests: any) {   
      const updatedWeights = this.updateWeights(interests, this.getWeights())
      this.logChoice(uid, interests, updatedWeights)
      this.setWeights(updatedWeights)
    },

    // Find the smallest image size that is bigger and w and h and
    // return it. If the requested size is larger than any of our
    // images, then return the first one (which should be largest).
    findImage: function (images: any, w: any, h: any) {
      let image = null
      let smallest2 = Number.MAX_VALUE
      const len = images.length
      for (let i = 0; i < len; i++) {
        const el = images[i]
        if (el.width >= w && el.height >= h) {
          const size2 = el.width * el.width + el.height * el.height
          if (size2 < smallest2) {
            image = el
            smallest2 = size2
          }
        }
      }
      if (!image) {
        image = images[0]
      }
      return image
    },

    //--------------------------------------------------------------------
    // CHOOSE: Perform the core end-to-end algorithm.
    //--------------------------------------------------------------------

    // Get the user weights, score the lookbooks and then select the
    // lookbooks to show the user. Finally, log the selection choices
    // before returning. We clip the total number of posts we will
    // process to maxConsidered. If we clip we take the first n posts.
    performChoose: function (posts: any) {
      const userWeights = this.getWeights()
      const cleaned = this.cleanup(posts)
      const data = cleaned.slice(0, this.maxConsidered)
      this.scored = this.score(data, userWeights)
      const list = this.getList(this.scored, userWeights)
      this.logSelected(list, userWeights)
      return list
    },

    // Remove damaged lookbooks.
    //
    // Right now it makes sure we have an array of lookbooks, that all
    // lookbooks are objects, that all lookbook objects have an uid,
    // and they all have an array of interests. These are quick
    // checks. Many more could be added.
    cleanup: function (lookbooks: any) {
      // Make sure we have an array.
      if (!Array.isArray(lookbooks)) {
        console.log('Lookbook array is corrupted.')
        return []
      }

      // Loop over lookbooks and run tests.
      const result = []
      for (const lkbk of lookbooks) {
        if (lkbk === null || typeof lkbk !== 'object') {
          console.log('Bad lookbook object in array.')
          continue
        }
        if (typeof lkbk.uid !== 'string') {
          console.log('Bad lookbook uid.')
          continue
        }
        if (!Array.isArray(lkbk.interests) || lkbk.interests.length === 0) {
          console.log('Lookbook ' + lkbk.uid + ' missing interests.')
          continue
        }
        result.push(lkbk)
      }
      return result
    },

    //--------------------------------------------------------------------
    // SCORING: Interest scoring routines.
    //--------------------------------------------------------------------

    // Loop over supplied interests and items, calculate a score based
    // on the interests and store that score into the items
    // objects. The first interest (considered the primary interest)
    // gets a multiplication boost over the secondary interests by
    // design. All scores are boosted by an external value passed into
    // the item. Finally the score is raised to an exponent.
    score: function (lookbooks: any, userWeights: any) {
      for (const lkbk of lookbooks) {
        let finalScore = 0.0
        let i = 0
        if (!lkbk.interests) {
          finalScore = this.noInterestsValue
        } else {
          for (const interest of lkbk.interests) {
            let score = this.priority(interest, userWeights)
            if (i === 0) {
              score = score * this.level0Multiplier
            }
            finalScore += score
            i++
          }
        }
        const boost = lkbk.boost || 0.0 // Make sure we have a value.
        finalScore = finalScore * (1.0 + boost)
        lkbk.score = Math.pow(finalScore, this.scoreBoostExponent)
      }
      return lookbooks
    },

    // Return the interest's score preferably using the user weights.
    // Start with user weight map, if that fails use the value from the
    // default map, finally just use a very small value.
    priority: function (interest: string, userWeights: any) {
      let v = userWeights[interest]
      if (v) {
        return v
      }
      v = this.defaultInterests[interest]
      if (v) {
        return v.weight
      }
      return this.initialValue
    },

    //--------------------------------------------------------------------
    // SELECTION: Selection routines.
    //--------------------------------------------------------------------

    // Take the available lookbooks, score them based on userWeights and
    // then return the best lookbooks to show to the user. This routine
    // takes an optional random number generator that is supplied by
    // testing to force specific choices during tests.
    getList: function (lookbooks: any, userWeights: any, rand = null as any) {
      rand = rand || Math.random

      // Final list result.
      const result = []

      // Start by looping over the items, copying all with the
      // 'promote' flag result list. Save the rest for further
      // processing.
      const temp = []
      for (const lkbk of lookbooks) {
        if (lkbk.promote) {
          // Push promoted lkbks directly on results.
          result.push(lkbk)
        } else {
          // Else save in temp.
          temp.push(lkbk)
        }
      }
      lookbooks = temp

      // Calculate the number of slots still needing to be filled.
      const num = Math.min(this.count - result.length, lookbooks.length)

      // Loop for the number of lookbooks we need, pick a good choice
      // and then update data based on previous selection.
      for (let i = 0; i < num; i++) {
        const selected = this.getSelection(lookbooks, rand)
        const update = this.updateChoices(lookbooks, userWeights, selected)
        result.push(update.lookbook)
        lookbooks = update.lookbooks
        userWeights = update.userWeights
      }
      return result
    },

    // Select appropriate lookbook and return its index. Base the
    // selection on a weighted random pull. Imagine a pie where each
    // lookbook is a slice who size is based on score of the lookbook
    // (bigger scores have a bigger slice). We then randomly select a
    // point on the perimeter of the pie and the lookbook at that point
    // is chosen.
    getSelection: function (lookbooks: any, rand: any) {
      let index = 0
      let runningSum = 0.0
      const randomChoice = rand()
      const scoreSum = this.scoreSum(lookbooks)
      this.lastAverage = scoreSum / lookbooks.length
      for (const lkbk of lookbooks) {
        runningSum += lkbk.score / scoreSum
        if (randomChoice <= runningSum) {
          return index
        }
        index += 1
      }
      return 0
    },

    // Get the sum of all the scores in the current list of lookbooks.
    scoreSum: function (lookbooks: any) {
      let scoreSum = 0.0
      for (const lkbk of lookbooks) {
        scoreSum += lkbk.score
      }
      return scoreSum
    },

    // Take the original lookbook list and remove the chosen lookbook
    // based on the index. Then create a new list of lookbooks without
    // the selected lookbook. Finally, update the weights to
    // deprioritize any of selected interests.
    updateChoices: function (lookbooks:any, userWeights: any, index: any) {
      // Fetch the lookbook.
      const lkbk = lookbooks[index]

      // Make a copy of the lookbook list and remove the chosen index.
      const remaining = lookbooks.slice()
      remaining.splice(index, 1)

      // Clone the weights and deprioritize interests just selected.
      const uw = Object.assign({}, userWeights)
      for (const i of lkbk.interests) {
        uw[i] = uw[i] * (1.0 - this.deprioritization)
      }

      // Return the values.
      return {
        lookbook: lkbk,
        lookbooks: remaining,
        userWeights: uw
      }
    },

    //--------------------------------------------------------------------
    // UPDATE_WEIGHTS: Update user interest weights.
    //--------------------------------------------------------------------

    // This is the heart of the personalization as it the method that
    // updates the user weights based on the lookbook the user chooses.
    //
    // This algorthm is based on a low-pass filter. In simple terms it
    // creates a running average approximation by keeping most of the
    // previous value and increase or decrease it based on the user
    // selection.
    updateWeights: function (interests: any, userWeights: any) {
      // Loop over existing weights and update them.
      for (const k in userWeights) {
        const v = interests.indexOf(k) === -1 ? this.missValue : this.hitValue
        let score = userWeights[k]
        score = this.filterConst * score + (1.0 - this.filterConst) * v
        score = Math.min(1.0, Math.max(this.interestValueFloor, score))
        userWeights[k] = score
      }

      // Check to make sure each interest is in the weights and if it is
      // not then add it with the default value.
      for (const i of interests) {
        if (!userWeights[i]) {
          userWeights[i] = this.initialValue
        }
      }
      return userWeights
    },

    //--------------------------------------------------------------------
    // LOGGING: Log selection process and user choice.
    //--------------------------------------------------------------------

    // Log selection.
    logSelected: function (selectedList: any, userWeights: any) {
      let allSum = 0.0
      let selectedSum = 0.0
      const lookbooks = {} as any
      let lkbk = null as any
      for (lkbk of this.scored) {
        allSum += lkbk.score
        lookbooks[lkbk.uid] = {
          interests: lkbk.interests,
          score: this.limit(lkbk.score)
        }
      }
      const selected = []
      for (lkbk of selectedList) {
        selectedSum += lkbk.score
        selected.push(lkbk.uid)
      }
      const uw = {} as any
      for (const k in userWeights) {
        uw[k] = this.limit(userWeights[k])
      }
      this.log({
        event: 'selectedList',
        average_score: this.limit(allSum / this.scored.length),
        average_chosen: this.limit(selectedSum / selectedList.length),
        lookbooks: lookbooks,
        selected: selected,
        user_weights: uw
      })
    },

    // Log user choice.
    logChoice: function (uid: any, interests: any, userWeights: any) {
      const uw = {} as any
      for (const k in userWeights) {
        uw[k] = this.limit(userWeights[k])
      }
      this.log({
        event: 'chosenLookbook',
        lookbook: uid,
        interests: interests,
        user_weights: uw
      })
    },

    // Limit value to 3 decimal digits.
    limit: function (x: any) {
      return Math.round(x * 1000) / 1000
    },

    // Send log event if dataLayer exists. Output debugging if set.
    log: function (event: any) {
      const w = window as any
      if (w && w.dataLayer) {
        w.dataLayer.push(event)
      }
      this.outputDebugging(event)
    },

    //--------------------------------------------------------------------
    // DEBUGGING: Output debugging information for testing.
    //--------------------------------------------------------------------

    // Turn on debugging.
    enableDebugging: function () {
      this.debug = true
      this.outputDebugging(this.lastEvent)
    },

    // Output debugging information.
    outputDebugging: function (e: any) {
      if (this.debug && e) {
        if (e.event === 'selectedList') {
          this.outputSelectedList(e)
        } else if (e.event === 'chosenLookbook') {
          this.outputChosenLookbook(e)
        } else {
          console.log('Unknown MyContent event: ' + e.event)
        }
      }
      this.lastEvent = e
    },

    // Output selectedList debugging information.
    outputSelectedList: function (e: any) {
      console.log(
        '%c Selected List, available:' +
          this.scored.length +
          ', average_score:' +
          e.average_score +
          ', average_chosen:' +
          e.average_chosen,
        'color: #40F040'
      )
      const ci = this.interestsInfo()
      const li = this.lookbookInfo(ci) as any
      let count = 1
      for (const uid of e.selected) {
        li[uid].selected = 'SELECTED-' + count
        count += 1
      }
      const si = []
      for (const k in li) {
        si.push(li[k])
      }
      si.sort((a, b) => b.score - a.score)
      console.table(si)
      this.outputUserWeights(e)
    },

    // Output ohosenLookbook debugging information.
    outputChosenLookbook: function (e: any) {
      const ci = this.interestsInfo()
      const li = this.lookbookInfo(ci) as any
      const lkbk = li[e.lookbook]
      console.log(
        "%c Chosen Lookbook: '" + lkbk.title + "', interests: " + lkbk.interests,
        'color: #40F040'
      )
      this.outputUserWeights(e)
      prompt('Press return to continue')
    },

    // Output user weights and when appropriate their changes.
    outputUserWeights: function (e: any) {
      const wi = []
      const ci = this.interestsInfo() as any
      let sum = 0.0
      let wk = null
      for (wk in e.user_weights) {
        sum += e.user_weights[wk]
      }
      for (wk in e.user_weights) {
        const score = e.user_weights[wk]
        const obj = {
          interest: ci[wk] || wk,
          score: this.limit(score),
          percent: this.limit((score / sum) * 100),
          delta: null as any,
          dir: null as any
        }
        if (this.lastUserWeights) {
          const delta = score - this.lastUserWeights[wk]
          obj.delta = this.limit(delta)
          if (delta > 0) {
            obj.dir = 'UP'
          } else if (delta < 0) {
            obj.dir = 'DOWN'
          } else {
            obj.dir = '-'
          }
        }
        wi.push(obj)
      }
      this.lastUserWeights = e.user_weights
      wi.sort((a, b) => b.score - a.score)
      console.table(wi)
    },

    // Map category UID to its name mapping.
    interestsInfo: function () {
      const ci = {} as any
      for (const k in this.defaultInterests) {
        ci[k] = this.defaultInterests[k].name.en
      }
      return ci
    },

    // Map posts UID to title, interests and score.
    lookbookInfo: function (ci: any) {
      const m = {} as any
      let sum = 0.0
      let p = null as any
      for (p of this.scored) {
        sum += p.score
      }
      for (p of this.scored) {
        // Collect the interest names.
        const interests = []
        if (p.interests) {
          for (const i of p.interests) {
            interests.push(ci[i])
          }
        }
        // Create mapping.
        m[p.uid] = {
          title: p.title,
          interests: interests.join(' | '),
          score: this.limit(p.score),
          percent: this.limit((p.score / sum) * 100),
          selected: ''
        }
      }
      return m
    },

    //--------------------------------------------------------------------
    // STORAGE: Read and write local storage with personalized data.
    //--------------------------------------------------------------------

    // Save the weights in the local browser storage.
    setWeights: function (weights: any) {
      localStorage.setItem(localStorageKeyName, JSON.stringify(weights))
    },

    // Save the weights in the local browser storage.
    getWeights: function () {
      const v = localStorage.getItem(localStorageKeyName)
      if (v) {
        console.log('found v: ' + v)
        return JSON.parse(v)
       
      }
      const weights = {} as any
      console.log(this.defaultInterests)
      for (const k in this.defaultInterests) {
        weights[k] = this.defaultInterests[k].weight || this.initialWeight
        console.log(weights)
      }
      console.log(weights)
      return weights
    }
  }

  // Save handle debugging.
  personalizeInstances.push(instance)
  if (personalizeDebug) {
    instance.enableDebugging()
  }

  // Return the new instance.
  return instance
}

// TODO: TODO: TODO: This needs to die. We don't want to ever be writing to built-in
// methods, primitives, objects, functions, etc. Dirty dirty dirty!!!
// I would remove it now, but we need make sure the content editors/testers are aware of
// a new approach.
// Output console debugging information for testing.
const c = console as any
c.mycontent = function () {
  personalizeDebug = true
  for (const instance of personalizeInstances) {
    instance.enableDebugging()
  }
  return null
}

export default NewPersonalize
