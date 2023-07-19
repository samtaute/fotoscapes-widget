const news = JSON.parse(`
{
    "status": {
    "http": 200,
    "lkbk": "OK"
    },
    "ver": "1.0",
    "interests": {
    "01f2PHo": {
    "name": {
    "en": "Astrology"
    },
    "weight": 0.7
    },
    "01f7Pco": {
    "name": {
    "en": "Sports"
    },
    "weight": 0.53
    },
    "01fPho": {
    "name": {
    "en": "Photography"
    },
    "weight": 0.55
    },
    "1Df64CD": {
    "name": {
    "en": "Influencers"
    },
    "weight": 0.4
    },
    "26fbYCm": {
    "name": {
    "en": "Sports News"
    },
    "weight": 0.5
    },
    "26fgYum": {
    "name": {
    "en": "Celebrity Homes"
    },
    "weight": 0.8
    },
    "3xfBzCl": {
    "name": {
    "en": "Architecture"
    },
    "weight": 0.55
    },
    "3xfzul": {
    "name": {
    "en": "Noteworthy"
    },
    "weight": 0.47
    },
    "3xfzzil": {
    "name": {
    "en": "Technology News"
    },
    "weight": 0.5
    },
    "4xf2df3": {
    "name": {
    "en": "News"
    },
    "weight": 0.5
    },
    "4xfdS3": {
    "name": {
    "en": "Editorial Photography"
    },
    "weight": 0.39
    },
    "6JfV7FW": {
    "name": {
    "en": "Entertainment"
    },
    "weight": 0.6
    },
    "7mfnQIy": {
    "name": {
    "en": "Personal Finance"
    },
    "weight": 0.5
    },
    "97fEvFR": {
    "name": {
    "en": "Strange News"
    },
    "weight": 0.68
    },
    "97fvsR": {
    "name": {
    "en": "Cars & Rides"
    },
    "weight": 0.5
    },
    "97fvvHR": {
    "name": {
    "en": "Science"
    },
    "weight": 0.5
    },
    "ANfkmhe": {
    "name": {
    "en": "Shopping"
    },
    "weight": 0.7
    },
    "BBfmJtJ": {
    "name": {
    "en": "Wellness"
    },
    "weight": 0.52
    },
    "LRfPcJ": {
    "name": {
    "en": "Celebrities"
    },
    "weight": 0.7
    },
    "LRfbPUJ": {
    "name": {
    "en": "General News"
    },
    "weight": 0.5
    },
    "NZf7cr": {
    "name": {
    "en": "Travel"
    },
    "weight": 0.7
    },
    "OnfOio": {
    "name": {
    "en": "Women"
    },
    "weight": 0.5
    },
    "OnfPOIo": {
    "name": {
    "en": "Mobile Apps"
    },
    "weight": 0.22
    },
    "OnfyOho": {
    "name": {
    "en": "Sneakers"
    },
    "weight": 0.55
    },
    "Rqf2Tg": {
    "name": {
    "en": "Fashion"
    },
    "weight": 0.31
    },
    "Rqfo2tg": {
    "name": {
    "en": "Entertainment News"
    },
    "weight": 0.5
    },
    "VPf7tE": {
    "name": {
    "en": "Women's Style"
    },
    "weight": 0.5
    },
    "WJfPRCJ": {
    "name": {
    "en": "Technology"
    },
    "weight": 0.5
    },
    "ZofNtA": {
    "name": {
    "en": "Culture"
    },
    "weight": 0.43
    },
    "ZofgNIA": {
    "name": {
    "en": "Health"
    },
    "weight": 0.5
    },
    "aYfZ9HP": {
    "name": {
    "en": "Science News"
    },
    "weight": 0.5
    },
    "dofEhL": {
    "name": {
    "en": "Outdoor Photography"
    },
    "weight": 0.71
    },
    "dofxEcL": {
    "name": {
    "en": "Business"
    },
    "weight": 0.3
    },
    "e1f1GsP": {
    "name": {
    "en": "Games"
    },
    "weight": 0.35
    },
    "e1fGFP": {
    "name": {
    "en": "Men's Style"
    },
    "weight": 0.47
    },
    "e1frGSP": {
    "name": {
    "en": "Celebrity Style"
    },
    "weight": 0.33
    },
    "g6fYliB": {
    "name": {
    "en": "Lifestyle"
    },
    "weight": 0.49
    },
    "jxfQZuD": {
    "name": {
    "en": "International News"
    },
    "weight": 0.4
    },
    "jxfZUD": {
    "name": {
    "en": "Art & Design"
    },
    "weight": 0.5
    },
    "lAfvyuy": {
    "name": {
    "en": "Politics"
    },
    "weight": 0.4
    },
    "lAfyfy": {
    "name": {
    "en": "Music"
    },
    "weight": 0.59
    },
    "oNfDHQ": {
    "name": {
    "en": "Designer Fashion"
    },
    "weight": 0.27
    },
    "q6fqjSw": {
    "name": {
    "en": "Food & Drink"
    },
    "weight": 0.5
    },
    "v4fBVtL": {
    "name": {
    "en": "US News"
    },
    "weight": 0.5
    },
    "v4fVCL": {
    "name": {
    "en": "Home"
    },
    "weight": 0.61
    },
    "v4fYViL": {
    "name": {
    "en": "Gear & Gadgets"
    },
    "weight": 0.57
    },
    "w6fnIL": {
    "name": {
    "en": "TV & Film"
    },
    "weight": 0.45
    },
    "x6fBXcR": {
    "name": {
    "en": "Top News"
    },
    "weight": 0.7
    },
    "x6fpXFR": {
    "name": {
    "en": "Adventure"
    },
    "weight": 0.63
    }
    },
    "items": [
    {
    "title": {
    "en": "Ukraine tops NATO summit agenda along with defense plans, Sweden's membership and Belarus fears"
    },
    "summary": {
    "en": "Russia’s war on Ukraine tops the agenda when U.S. President Joe Biden and his NATO counterparts meet on Tuesday and Wednesday"
    },
    "link": "https://fotoscapes.com/lookbook/g6fwwNrSZ/ukraine-tops-nato-summit-agenda-along-with-defense-plans-swedens-membership-and-belarus-fears",
    "sourceLink": "https://apnews.com/article/nato-summit-russia-ukraine-sweden-belarus-nuclear-fe29919d28b9141cc8929ee7e05c98df",
    "uid": "g6fwwNrSZ",
    "lbtype": "article",
    "interests": [
    "4xf2df3",
    "dofxEcL",
    "jxfQZuD",
    "lAfvyuy"
    ],
    "images": [
    {
    "link": "https://media.fotoscapes.com/imgs/aY/fz/1d/PS/1/aYfz1dPS1-zpf739J6UE.jpg",
    "width": 1280,
    "height": 854
    },
    {
    "link": "https://media.fotoscapes.com/imgs/aY/fz/1d/PS/1/aYfz1dPS1-r6fjL2ywSV.jpg",
    "width": 1024,
    "height": 683
    },
    {
    "link": "https://media.fotoscapes.com/imgs/aY/fz/1d/PS/1/aYfz1dPS1-oNf0vNbpfA.jpg",
    "width": 850,
    "height": 567
    }
    ],
    "previews": [
    {
    "link": "https://media.fotoscapes.com/imgs/aY/fz/1d/PS/1/aYfz1dPS1-kvfr2d1AFO.jpg",
    "width": 675,
    "height": 300
    },
    {
    "link": "https://media.fotoscapes.com/imgs/aY/fz/1d/PS/1/aYfz1dPS1-yBfk96LkCO.jpg",
    "width": 450,
    "height": 200
    },
    {
    "link": "https://media.fotoscapes.com/imgs/aY/fz/1d/PS/1/aYfz1dPS1-ngfex4n0Sz.jpg",
    "width": 360,
    "height": 160
    },
    {
    "link": "https://media.fotoscapes.com/imgs/aY/fz/1d/PS/1/aYfz1dPS1-YofYVkq1fo.jpg",
    "width": 270,
    "height": 120
    }
    ],
    "kb": {
    "startX": 0.5,
    "startY": 0.5,
    "startB": 0.4444,
    "endX": 0.5,
    "endY": 0.3666,
    "endB": 0.4444
    },
    "owner": "AP News",
    "brandLogo": "https://media.fotoscapes.com/imgs/Gv/fQ/eG/CE/GvfQeGCE-aYfnZQlu0.png",
    "brandLogoDark": "https://media.fotoscapes.com/imgs/Gv/fQ/eG/CE/GvfQeGCE-ANfBbr3U0.png",
    "numImages": 3,
    "boost": 0,
    "promote": true,
    "publishOn": "2023-07-10T06:06:04Z",
    "scheduledOn": "2023-07-10T16:02:07Z"
    },
    {
    "title": {
    "en": "Two New York counties declare state of emergency; at least 1 dead in flash flooding"
    },
    "summary": {
    "en": "July 10 (UPI) -- New York Gov. Kathy Hochul on Sunday night declared a state of emergency for Orange and Ontario Counties as a slow-moving series of thunderstorms prompted flash flood warnings to be issued throughout southeastern New York."
    },
    "link": "https://fotoscapes.com/lookbook/1DfDDgqiq/two-new-york-counties-declare-state-of-emergency-at-least-1-dead-in-flash-flooding",
    "sourceLink": "https://www.upi.com/Top_News/US/2023/07/10/NY-flash-flooding/8951688966603/",
    "uid": "1DfDDgqiq",
    "lbtype": "article",
    "interests": [
    "4xf2df3"
    ],
    "images": [
    {
    "link": "https://media.fotoscapes.com/imgs/w6/fL/oe/Vc/g/w6fLoeVcg-Zofe6p7Oig.jpg",
    "width": 1024,
    "height": 682
    },
    {
    "link": "https://media.fotoscapes.com/imgs/w6/fL/oe/Vc/g/w6fLoeVcg-jxfnaZGLf9.jpg",
    "width": 850,
    "height": 566
    }
    ],
    "previews": [
    {
    "link": "https://media.fotoscapes.com/imgs/w6/fL/oe/Vc/g/w6fLoeVcg-x6fdoQJRhY.jpg",
    "width": 675,
    "height": 300
    },
    {
    "link": "https://media.fotoscapes.com/imgs/w6/fL/oe/Vc/g/w6fLoeVcg-v4fzl7q3Ub.jpg",
    "width": 450,
    "height": 200
    },
    {
    "link": "https://media.fotoscapes.com/imgs/w6/fL/oe/Vc/g/w6fLoeVcg-BBf6yYrGcD.jpg",
    "width": 360,
    "height": 160
    },
    {
    "link": "https://media.fotoscapes.com/imgs/w6/fL/oe/Vc/g/w6fLoeVcg-7mfNVrWrIx.jpg",
    "width": 270,
    "height": 120
    }
    ],
    "kb": {
    "startX": 0.5,
    "startY": 0.5,
    "startB": 0.4444,
    "endX": 0.5,
    "endY": 0.367,
    "endB": 0.4444
    },
    "owner": "UPI",
    "brandLogo": "https://media.fotoscapes.com/imgs/ng/fd/YQ/Hg/ngfdYQHg-ZofQ9qwSg.png",
    "brandLogoDark": "https://media.fotoscapes.com/imgs/ng/fd/YQ/Hg/ngfdYQHg-ZofOzDPCg.png",
    "numImages": 1,
    "boost": 0,
    "promote": true,
    "publishOn": "2023-07-10T06:56:00Z",
    "scheduledOn": "2023-07-10T16:01:51Z"
    },
    {
    "title": {
    "en": "Putin met with Wagner leader after rebellion: Kremlin"
    },
    "summary": {
    "en": "Russian President Vladimir Putin met with Yevgeny Prigozhin just days after the leader of the Wagner Group spearheaded a short-lived rebellion against Moscow, the Kremlin said. Kremlin spokesman Dmitry Peskov told reporters that the three-hour meeting, which took place on June 29, included 35 people. Commanders of Prigozhin’s mercenary group also took part in the..."
    },
    "link": "https://fotoscapes.com/lookbook/PYfyq3pCo/putin-met-with-wagner-leader-after-rebellion-kremlin",
    "sourceLink": "https://thehill.com/policy/international/4088422-putin-met-with-wagner-leader-after-rebellion-kremlin/",
    "uid": "PYfyq3pCo",
    "lbtype": "springboard",
    "interests": [
    "lAfvyuy",
    "4xf2df3"
    ],
    "images": [
    {
    "link": "https://media.fotoscapes.com/imgs/q6/f9/pB/mH/R/q6f9pBmHR-r6fjaDmJSV.jpg",
    "width": 850,
    "height": 478
    }
    ],
    "previews": [
    {
    "link": "https://media.fotoscapes.com/imgs/q6/f9/pB/mH/R/q6f9pBmHR-Gvf9kqb0sa.jpg",
    "width": 675,
    "height": 300
    },
    {
    "link": "https://media.fotoscapes.com/imgs/q6/f9/pB/mH/R/q6f9pBmHR-EvfaDJkZCO.jpg",
    "width": 450,
    "height": 200
    },
    {
    "link": "https://media.fotoscapes.com/imgs/q6/f9/pB/mH/R/q6f9pBmHR-kvfrDAj0hO.jpg",
    "width": 360,
    "height": 160
    },
    {
    "link": "https://media.fotoscapes.com/imgs/q6/f9/pB/mH/R/q6f9pBmHR-yBfkBNqJcO.jpg",
    "width": 270,
    "height": 120
    }
    ],
    "kb": {
    "startX": 0.5,
    "startY": 0.5,
    "startB": 0.4444,
    "endX": 0.5,
    "endY": 0.4161,
    "endB": 0.4444
    },
    "owner": "The Hill",
    "brandLogo": "https://media.fotoscapes.com/imgs/6J/fz/Zl/SL/6JfzZlSL-lAfezy9Yfe.png",
    "brandLogoDark": "https://media.fotoscapes.com/imgs/6J/fz/Zl/SL/6JfzZlSL-26fWD10EUy.png",
    "numImages": 1,
    "boost": 0,
    "promote": true,
    "publishOn": "2023-07-10T12:19:21Z",
    "scheduledOn": "2023-07-10T16:00:51Z"
    },
    {
    "title": {
    "en": "Threads Hits 100 Million Users Days After Launch"
    },
    "summary": {
    "en": "(Bloomberg) -- Meta Platforms Inc.’s answer to Twitter has rocketed to 100 million users in less than a week, Chief Executive Officer Mark Zuckerberg announced on Monday."
    },
    "link": "https://fotoscapes.com/lookbook/ZofPLqDH0/threads-hits-100-million-users-days-after-launch",
    "sourceLink": "https://www.bloomberg.com/news/articles/2023-07-10/meta-s-threads-app-reaches-100-million-users-days-after-launch",
    "uid": "ZofPLqDH0",
    "lbtype": "article",
    "interests": [
    "4xf2df3"
    ],
    "images": [
    {
    "link": "https://media.fotoscapes.com/imgs/BB/fp/7X/Wu/Y/BBfp7XWuY-RqfdZZJ9fX.jpg",
    "width": 1280,
    "height": 853
    },
    {
    "link": "https://media.fotoscapes.com/imgs/BB/fp/7X/Wu/Y/BBfp7XWuY-jxfnzzjkS9.jpg",
    "width": 1024,
    "height": 683
    },
    {
    "link": "https://media.fotoscapes.com/imgs/BB/fp/7X/Wu/Y/BBfp7XWuY-lAfd44jVFe.jpg",
    "width": 850,
    "height": 567
    }
    ],
    "previews": [
    {
    "link": "https://media.fotoscapes.com/imgs/BB/fp/7X/Wu/Y/BBfp7XWuY-01fkooaRhA.jpg",
    "width": 675,
    "height": 300
    },
    {
    "link": "https://media.fotoscapes.com/imgs/BB/fp/7X/Wu/Y/BBfp7XWuY-NZf7wwgghz.jpg",
    "width": 450,
    "height": 200
    },
    {
    "link": "https://media.fotoscapes.com/imgs/BB/fp/7X/Wu/Y/BBfp7XWuY-p6fLwwXoC0.jpg",
    "width": 360,
    "height": 160
    },
    {
    "link": "https://media.fotoscapes.com/imgs/BB/fp/7X/Wu/Y/BBfp7XWuY-zpf7rrJgIE.jpg",
    "width": 270,
    "height": 120
    }
    ],
    "kb": {
    "startX": 0.5,
    "startY": 0.5,
    "startB": 0.4444,
    "endX": 0.5,
    "endY": 0.3666,
    "endB": 0.4444
    },
    "owner": "Bloomberg",
    "brandLogo": "https://media.fotoscapes.com/imgs/p6/fB/Gj/Sr/p6fBGjSr-XofyyyOqim.png",
    "brandLogoDark": "https://media.fotoscapes.com/imgs/p6/fB/Gj/Sr/p6fBGjSr-PYfNNNEdf7.png",
    "numImages": 1,
    "boost": 0,
    "promote": true,
    "publishOn": "2023-07-10T14:02:20Z",
    "scheduledOn": "2023-07-10T16:00:37Z"
    },
    {
    "title": {
    "en": "Larry Nassar, doctor who abused over 500 female athletes, stabbed multiple times in prison"
    },
    "summary": {
    "en": "Nassar has been assaulted multiple times since his incarceration."
    },
    "link": "https://fotoscapes.com/lookbook/bYfw6bOId/larry-nassar-doctor-who-abused-over-500-female-athletes-stabbed-multiple-times-in-prison",
    "sourceLink": "https://www.sbnation.com/2023/7/10/23789565/larry-nassar-stabbed-usa-gymnastics-michigan-state-doctor",
    "uid": "bYfw6bOId",
    "lbtype": "springboard",
    "interests": [
    "01f7Pco"
    ],
    "images": [
    {
    "link": "https://media.fotoscapes.com/imgs/01/f9/pB/oC/P/01f9pBoCP-v4fzxNweHb.jpg",
    "width": 1280,
    "height": 853
    },
    {
    "link": "https://media.fotoscapes.com/imgs/01/f9/pB/oC/P/01f9pBoCP-Onfb1W2pIJ.jpg",
    "width": 1024,
    "height": 682
    },
    {
    "link": "https://media.fotoscapes.com/imgs/01/f9/pB/oC/P/01f9pBoCP-BBf69blbiD.jpg",
    "width": 850,
    "height": 566
    }
    ],
    "previews": [
    {
    "link": "https://media.fotoscapes.com/imgs/01/f9/pB/oC/P/01f9pBoCP-Gvf9kbdaTa.jpg",
    "width": 675,
    "height": 300
    },
    {
    "link": "https://media.fotoscapes.com/imgs/01/f9/pB/oC/P/01f9pBoCP-EvfaDkbgUO.jpg",
    "width": 450,
    "height": 200
    },
    {
    "link": "https://media.fotoscapes.com/imgs/01/f9/pB/oC/P/01f9pBoCP-yBfkBqdzhO.jpg",
    "width": 360,
    "height": 160
    },
    {
    "link": "https://media.fotoscapes.com/imgs/01/f9/pB/oC/P/01f9pBoCP-YofY31NZuo.jpg",
    "width": 270,
    "height": 120
    }
    ],
    "kb": {
    "startX": 0.5,
    "startY": 0.5,
    "startB": 0.4444,
    "endX": 0.5,
    "endY": 0.3668,
    "endB": 0.4444
    },
    "owner": "SBNation",
    "brandLogo": "https://media.fotoscapes.com/imgs/Gv/fW/qQ/HE/GvfWqQHE-yBfNGR1RIO.png",
    "brandLogoDark": "https://media.fotoscapes.com/imgs/Gv/fW/qQ/HE/GvfWqQHE-ngf9jkRdHz.png",
    "numImages": 1,
    "boost": 0,
    "promote": true,
    "publishOn": "2023-07-10T13:32:00Z",
    "scheduledOn": "2023-07-10T16:00:19Z"
    },
    {
    "title": {
    "en": "There are 5 big reasons experts are worried about a recession - but there's a bullish response to all of them"
    },
    "summary": {
    "en": "'We reckon that the excess liquid assets held by the Baby Boomers alone ranged between $1.0 to $2.0 trillion at the end of Q1,' Ed Yardeni said."
    },
    "link": "https://fotoscapes.com/lookbook/m7fa2Nefe/there-are-5-big-reasons-experts-are-worried-about-a-recession-but-theres-a-bullish-response-to-all-of-them",
    "sourceLink": "https://markets.businessinsider.com/news/stocks/economy-recession-watch-5-reasons-experts-worried-stock-market-yardeni-2023-7",
    "uid": "m7fa2Nefe",
    "lbtype": "springboard",
    "interests": [
    "dofxEcL",
    "4xf2df3"
    ],
    "images": [
    {
    "link": "https://media.fotoscapes.com/imgs/w6/fL/bN/Xu/g/w6fLbNXug-DkfDAd0kcR.jpg",
    "width": 1280,
    "height": 960
    },
    {
    "link": "https://media.fotoscapes.com/imgs/w6/fL/bN/Xu/g/w6fLbNXug-1DfWnJDqhj.jpg",
    "width": 1024,
    "height": 768
    },
    {
    "link": "https://media.fotoscapes.com/imgs/w6/fL/bN/Xu/g/w6fLbNXug-WJfX2VAZuL.jpg",
    "width": 850,
    "height": 638
    }
    ],
    "previews": [
    {
    "link": "https://media.fotoscapes.com/imgs/w6/fL/bN/Xu/g/w6fLbNXug-4xfo10vDUl.jpg",
    "width": 675,
    "height": 300
    },
    {
    "link": "https://media.fotoscapes.com/imgs/w6/fL/bN/Xu/g/w6fLbNXug-dof4B9ZrsV.jpg",
    "width": 450,
    "height": 200
    },
    {
    "link": "https://media.fotoscapes.com/imgs/w6/fL/bN/Xu/g/w6fLbNXug-RqfdZm1QfX.jpg",
    "width": 360,
    "height": 160
    },
    {
    "link": "https://media.fotoscapes.com/imgs/w6/fL/bN/Xu/g/w6fLbNXug-LRfVp21bt6.jpg",
    "width": 270,
    "height": 120
    }
    ],
    "kb": {
    "startX": 0.5,
    "startY": 0.5,
    "startB": 0.4444,
    "endX": 0.5,
    "endY": 0.337,
    "endB": 0.4444
    },
    "owner": "Business Insider",
    "brandLogo": "https://media.fotoscapes.com/imgs/w6/fE/wv/ir/w6fEwvir-q6fEPoBPfY.png",
    "brandLogoDark": "https://media.fotoscapes.com/imgs/w6/fE/wv/ir/w6fEwvir-ANfJ4eoYi0.png",
    "numImages": 1,
    "boost": 0,
    "promote": false,
    "publishOn": "2023-07-10T16:36:12Z",
    "scheduledOn": "2023-07-10T17:01:42Z"
    },
    {
    "title": {
    "en": "How to sign up for Amazon Prime to unlock video streaming, free one-day delivery, and other great perks"
    },
    "summary": {
    "en": "Here's how to sign up for Amazon Prime and get video streaming, discounted prices and free, faster shipping from the world's largest online retailer."
    },
    "link": "https://fotoscapes.com/lookbook/J1fvZljIP/how-to-sign-up-for-amazon-prime-to-unlock-video-streaming-free-one-day-delivery-and-other-great-perks",
    "sourceLink": "https://www.businessinsider.com/guides/streaming/how-to-sign-up-for-prime",
    "uid": "J1fvZljIP",
    "lbtype": "springboard",
    "interests": [
    "dofxEcL",
    "4xf2df3"
    ],
    "images": [
    {
    "link": "https://media.fotoscapes.com/imgs/jx/f0/XB/kh/z/jxf0XBkhz-Xofr9bXYFm.jpg",
    "width": 850,
    "height": 638
    }
    ],
    "previews": [
    {
    "link": "https://media.fotoscapes.com/imgs/jx/f0/XB/kh/z/jxf0XBkhz-yBfkBAXwhO.jpg",
    "width": 675,
    "height": 300
    },
    {
    "link": "https://media.fotoscapes.com/imgs/jx/f0/XB/kh/z/jxf0XBkhz-ngfeZyERsz.jpg",
    "width": 450,
    "height": 200
    },
    {
    "link": "https://media.fotoscapes.com/imgs/jx/f0/XB/kh/z/jxf0XBkhz-YofY3plAio.jpg",
    "width": 360,
    "height": 160
    },
    {
    "link": "https://media.fotoscapes.com/imgs/jx/f0/XB/kh/z/jxf0XBkhz-J1fWYlvRFn.jpg",
    "width": 270,
    "height": 120
    }
    ],
    "kb": {
    "startX": 0.5,
    "startY": 0.5,
    "startB": 0.4444,
    "endX": 0.5,
    "endY": 0.337,
    "endB": 0.4444
    },
    "owner": "Business Insider",
    "brandLogo": "https://media.fotoscapes.com/imgs/w6/fE/wv/ir/w6fEwvir-q6fEPoBPfY.png",
    "brandLogoDark": "https://media.fotoscapes.com/imgs/w6/fE/wv/ir/w6fEwvir-ANfJ4eoYi0.png",
    "numImages": 1,
    "boost": 0,
    "promote": false,
    "publishOn": "2023-07-10T16:40:52Z",
    "scheduledOn": "2023-07-10T17:01:29Z"
    },
    {
    "title": {
    "en": "American Chris Eubanks Makes Stunning Run To Wimbledon Quarterfinals"
    },
    "summary": {
    "en": "Chris Eubanks is playing in his first Wimbledon before and is certainly not known as a grass court aficionado."
    },
    "link": "https://fotoscapes.com/lookbook/ngfENywt9/american-chris-eubanks-makes-stunning-run-to-wimbledon-quarterfinals",
    "sourceLink": "https://www.forbes.com/sites/adamzagoria/2023/07/10/american-chris-eubanks-makes-stunning-run-to-wimbledon-quarterfinals/",
    "uid": "ngfENywt9",
    "lbtype": "springboard",
    "interests": [
    "dofxEcL",
    "4xf2df3"
    ],
    "images": [
    {
    "link": "https://media.fotoscapes.com/imgs/BB/fp/v1/dc/Y/BBfpv1dcY-26fEe93WFy.jpg",
    "width": 850,
    "height": 567
    }
    ],
    "previews": [
    {
    "link": "https://media.fotoscapes.com/imgs/BB/fp/v1/dc/Y/BBfpv1dcY-v4fzxJv6Cb.jpg",
    "width": 675,
    "height": 300
    },
    {
    "link": "https://media.fotoscapes.com/imgs/BB/fp/v1/dc/Y/BBfpv1dcY-Onfb1xzwTJ.jpg",
    "width": 450,
    "height": 200
    },
    {
    "link": "https://media.fotoscapes.com/imgs/BB/fp/v1/dc/Y/BBfpv1dcY-01fkoObpSA.jpg",
    "width": 360,
    "height": 160
    },
    {
    "link": "https://media.fotoscapes.com/imgs/BB/fp/v1/dc/Y/BBfpv1dcY-NZf7wmoqsz.jpg",
    "width": 270,
    "height": 120
    }
    ],
    "kb": {
    "startX": 0.5,
    "startY": 0.5,
    "startB": 0.4444,
    "endX": 0.5,
    "endY": 0.3667,
    "endB": 0.4444
    },
    "owner": "Forbes",
    "brandLogo": "https://media.fotoscapes.com/imgs/e1/fr/JQ/sE/e1frJQsE-VPfjpLx1Fy.png",
    "brandLogoDark": "https://media.fotoscapes.com/imgs/e1/fr/JQ/sE/e1frJQsE-bYfRJYGAuQ.png",
    "numImages": 1,
    "boost": 0,
    "promote": false,
    "publishOn": "2023-07-10T16:12:50Z",
    "scheduledOn": "2023-07-10T17:01:12Z"
    },
    {
    "title": {
    "en": "Cubs Add Power Hitter Matt Shaw, Who Seeks Quick Trip To Chicago"
    },
    "summary": {
    "en": "There’s comfort for the Cubs in drafting college hitters. The success of Kris Bryant, Kyle Schwarber, Ian Happ and Nico Hoerner made it easy for them to add Matt Shaw."
    },
    "link": "https://fotoscapes.com/lookbook/YoflNpkcO/cubs-add-power-hitter-matt-shaw-who-seeks-quick-trip-to-chicago",
    "sourceLink": "https://www.forbes.com/sites/philrogers/2023/07/10/cubs-add-power-hitter-matt-shaw-who-seeks-quick-trip-to-chicago/",
    "uid": "YoflNpkcO",
    "lbtype": "springboard",
    "interests": [
    "dofxEcL",
    "4xf2df3"
    ],
    "images": [
    {
    "link": "https://media.fotoscapes.com/imgs/01/f9/YO/OT/P/01f9YOOTP-BBf69149fD.jpg",
    "width": 850,
    "height": 478
    }
    ],
    "previews": [
    {
    "link": "https://media.fotoscapes.com/imgs/01/f9/YO/OT/P/01f9YOOTP-p6fLwpgDt0.jpg",
    "width": 675,
    "height": 300
    },
    {
    "link": "https://media.fotoscapes.com/imgs/01/f9/YO/OT/P/01f9YOOTP-QafyLePOFN.jpg",
    "width": 450,
    "height": 200
    },
    {
    "link": "https://media.fotoscapes.com/imgs/01/f9/YO/OT/P/01f9YOOTP-zpf7rkQaiE.jpg",
    "width": 360,
    "height": 160
    },
    {
    "link": "https://media.fotoscapes.com/imgs/01/f9/YO/OT/P/01f9YOOTP-r6fja6z6fV.jpg",
    "width": 270,
    "height": 120
    }
    ],
    "kb": {
    "startX": 0.5,
    "startY": 0.5,
    "startB": 0.4444,
    "endX": 0.5,
    "endY": 0.416,
    "endB": 0.4444
    },
    "owner": "Forbes",
    "brandLogo": "https://media.fotoscapes.com/imgs/e1/fr/JQ/sE/e1frJQsE-VPfjpLx1Fy.png",
    "brandLogoDark": "https://media.fotoscapes.com/imgs/e1/fr/JQ/sE/e1frJQsE-bYfRJYGAuQ.png",
    "numImages": 1,
    "boost": 0,
    "promote": false,
    "publishOn": "2023-07-10T15:48:57Z",
    "scheduledOn": "2023-07-10T17:01:12Z"
    },
    {
    "title": {
    "en": "Major League Pickleball Draft Strategy And How To Build A Winning Team"
    },
    "summary": {
    "en": "Major League Pickleball is through the first half season of 2023, and some clear trends have emerged that should guide the drafting strategy for the rest of the season."
    },
    "link": "https://fotoscapes.com/lookbook/yBfXdALTo/major-league-pickleball-draft-strategy-and-how-to-build-a-winning-team",
    "sourceLink": "https://www.forbes.com/sites/toddboss/2023/07/10/major-league-pickleball-draft-strategy-and-how-to-build-a-winning-team/",
    "uid": "yBfXdALTo",
    "lbtype": "springboard",
    "interests": [
    "dofxEcL",
    "4xf2df3"
    ],
    "images": [
    {
    "link": "https://media.fotoscapes.com/imgs/On/fg/Qx/Bs/X/OnfgQxBsX-v4fzxJQrFb.jpg",
    "width": 850,
    "height": 478
    }
    ],
    "previews": [
    {
    "link": "https://media.fotoscapes.com/imgs/On/fg/Qx/Bs/X/OnfgQxBsX-ZofexQPYfg.jpg",
    "width": 675,
    "height": 300
    },
    {
    "link": "https://media.fotoscapes.com/imgs/On/fg/Qx/Bs/X/OnfgQxBsX-jxfnzByxs9.jpg",
    "width": 450,
    "height": 200
    },
    {
    "link": "https://media.fotoscapes.com/imgs/On/fg/Qx/Bs/X/OnfgQxBsX-w6f9vNQ6U0.jpg",
    "width": 360,
    "height": 160
    },
    {
    "link": "https://media.fotoscapes.com/imgs/On/fg/Qx/Bs/X/OnfgQxBsX-lAfd47pZHe.jpg",
    "width": 270,
    "height": 120
    }
    ],
    "kb": {
    "startX": 0.5,
    "startY": 0.5,
    "startB": 0.4444,
    "endX": 0.5,
    "endY": 0.416,
    "endB": 0.4444
    },
    "owner": "Forbes",
    "brandLogo": "https://media.fotoscapes.com/imgs/e1/fr/JQ/sE/e1frJQsE-VPfjpLx1Fy.png",
    "brandLogoDark": "https://media.fotoscapes.com/imgs/e1/fr/JQ/sE/e1frJQsE-bYfRJYGAuQ.png",
    "numImages": 1,
    "boost": 0,
    "promote": false,
    "publishOn": "2023-07-10T16:19:02Z",
    "scheduledOn": "2023-07-10T17:01:11Z"
    },
    {
    "title": {
    "en": "Three Things The International Community Can Do To Turn Up The Heat On Chief Executive John Lee In Hong Kong"
    },
    "summary": {
    "en": "As freedom in the the city-state continues to decline, Chief Executive John Lee must face continued consequences."
    },
    "link": "https://fotoscapes.com/lookbook/kvfxv0Ztq/three-things-the-international-community-can-do-to-turn-up-the-heat-on-chief-executive-john-lee-in-hong-kong",
    "sourceLink": "https://www.forbes.com/sites/oliviaenos/2023/07/10/three-things-the-international-community-can-do-to-turn-up-the-heat-on-chief-executive-john-lee-in-hong-kong/",
    "uid": "kvfxv0Ztq",
    "lbtype": "springboard",
    "interests": [
    "dofxEcL",
    "4xf2df3"
    ],
    "images": [
    {
    "link": "https://media.fotoscapes.com/imgs/e1/fJ/N3/7F/Q/e1fJN37FQ-ZofexQ44sg.jpg",
    "width": 850,
    "height": 567
    }
    ],
    "previews": [
    {
    "link": "https://media.fotoscapes.com/imgs/e1/fJ/N3/7F/Q/e1fJN37FQ-aYfbE6LkH0.jpg",
    "width": 675,
    "height": 300
    },
    {
    "link": "https://media.fotoscapes.com/imgs/e1/fJ/N3/7F/Q/e1fJN37FQ-26fEe9lqiy.jpg",
    "width": 450,
    "height": 200
    },
    {
    "link": "https://media.fotoscapes.com/imgs/e1/fJ/N3/7F/Q/e1fJN37FQ-97fW6LjRIL.jpg",
    "width": 360,
    "height": 160
    },
    {
    "link": "https://media.fotoscapes.com/imgs/e1/fJ/N3/7F/Q/e1fJN37FQ-3xfpxVlehp.jpg",
    "width": 270,
    "height": 120
    }
    ],
    "kb": {
    "startX": 0.5,
    "startY": 0.5,
    "startB": 0.4444,
    "endX": 0.5,
    "endY": 0.3667,
    "endB": 0.4444
    },
    "owner": "Forbes",
    "brandLogo": "https://media.fotoscapes.com/imgs/e1/fr/JQ/sE/e1frJQsE-VPfjpLx1Fy.png",
    "brandLogoDark": "https://media.fotoscapes.com/imgs/e1/fr/JQ/sE/e1frJQsE-bYfRJYGAuQ.png",
    "numImages": 1,
    "boost": 0,
    "promote": false,
    "publishOn": "2023-07-10T16:19:47Z",
    "scheduledOn": "2023-07-10T17:01:10Z"
    },
    {
    "title": {
    "en": "Iraq Might Buy Pakistan's JF-17 Fighter Or France's Rafale, Or Both"
    },
    "summary": {
    "en": "Baghdad is either exploring its options or plans on acquiring both combat aircraft."
    },
    "link": "https://fotoscapes.com/lookbook/EvfqbRbhD/iraq-might-buy-pakistans-jf-17-fighter-or-frances-rafale-or-both",
    "sourceLink": "https://www.forbes.com/sites/pauliddon/2023/07/10/iraq-might-buy-pakistans-jf-17-fighter-or-frances-rafale-or-both/",
    "uid": "EvfqbRbhD",
    "lbtype": "springboard",
    "interests": [
    "dofxEcL",
    "4xf2df3"
    ],
    "images": [
    {
    "link": "https://media.fotoscapes.com/imgs/v4/fr/nJ/mf/P/v4frnJmfP-WJfX2VGbsL.jpg",
    "width": 850,
    "height": 567
    }
    ],
    "previews": [
    {
    "link": "https://media.fotoscapes.com/imgs/v4/fr/nJ/mf/P/v4frnJmfP-ANfZNqELH0.jpg",
    "width": 675,
    "height": 300
    },
    {
    "link": "https://media.fotoscapes.com/imgs/v4/fr/nJ/mf/P/v4frnJmfP-4xfo10Ejtl.jpg",
    "width": 450,
    "height": 200
    },
    {
    "link": "https://media.fotoscapes.com/imgs/v4/fr/nJ/mf/P/v4frnJmfP-dof4B9VntV.jpg",
    "width": 360,
    "height": 160
    },
    {
    "link": "https://media.fotoscapes.com/imgs/v4/fr/nJ/mf/P/v4frnJmfP-RqfdZmeAuX.jpg",
    "width": 270,
    "height": 120
    }
    ],
    "kb": {
    "startX": 0.5,
    "startY": 0.5,
    "startB": 0.4444,
    "endX": 0.5,
    "endY": 0.3667,
    "endB": 0.4444
    },
    "owner": "Forbes",
    "brandLogo": "https://media.fotoscapes.com/imgs/e1/fr/JQ/sE/e1frJQsE-VPfjpLx1Fy.png",
    "brandLogoDark": "https://media.fotoscapes.com/imgs/e1/fr/JQ/sE/e1frJQsE-bYfRJYGAuQ.png",
    "numImages": 1,
    "boost": 0,
    "promote": false,
    "publishOn": "2023-07-10T16:20:23Z",
    "scheduledOn": "2023-07-10T17:01:08Z"
    },
    {
    "title": {
    "en": "NYC’s Jimmy Buffett-Themed Margaritaville Resort Files For Bankruptcy"
    },
    "summary": {
    "en": "The Manhattan location of Jimmy Buffett’s hospitality chain is trying to refinance and negotiate $309 million in debt as it faces a rough financial outlook."
    },
    "link": "https://fotoscapes.com/lookbook/XofX7bxCa/nycs-jimmy-buffett-themed-margaritaville-resort-files-for-bankruptcy",
    "sourceLink": "https://www.forbes.com/sites/willskipworth/2023/07/10/nycs-jimmy-buffett-themed-margaritaville-resort-files-for-bankruptcy/",
    "uid": "XofX7bxCa",
    "lbtype": "springboard",
    "interests": [
    "dofxEcL",
    "4xf2df3"
    ],
    "images": [
    {
    "link": "https://media.fotoscapes.com/imgs/97/fl/ZL/ZC/B/97flZLZCB-26fEe9LqCy.jpg",
    "width": 850,
    "height": 477
    }
    ],
    "previews": [
    {
    "link": "https://media.fotoscapes.com/imgs/97/fl/ZL/ZC/B/97flZLZCB-BBf691QgUD.jpg",
    "width": 675,
    "height": 300
    },
    {
    "link": "https://media.fotoscapes.com/imgs/97/fl/ZL/ZC/B/97flZLZCB-7mfNkBw3tx.jpg",
    "width": 450,
    "height": 200
    },
    {
    "link": "https://media.fotoscapes.com/imgs/97/fl/ZL/ZC/B/97flZLZCB-VPfDaNrJFy.jpg",
    "width": 360,
    "height": 160
    },
    {
    "link": "https://media.fotoscapes.com/imgs/97/fl/ZL/ZC/B/97flZLZCB-QafyLeZaCN.jpg",
    "width": 270,
    "height": 120
    }
    ],
    "kb": {
    "startX": 0.5,
    "startY": 0.5,
    "startB": 0.4444,
    "endX": 0.5,
    "endY": 0.4166,
    "endB": 0.4444
    },
    "owner": "Forbes",
    "brandLogo": "https://media.fotoscapes.com/imgs/e1/fr/JQ/sE/e1frJQsE-VPfjpLx1Fy.png",
    "brandLogoDark": "https://media.fotoscapes.com/imgs/e1/fr/JQ/sE/e1frJQsE-bYfRJYGAuQ.png",
    "numImages": 1,
    "boost": 0,
    "promote": false,
    "publishOn": "2023-07-10T16:31:48Z",
    "scheduledOn": "2023-07-10T17:01:06Z"
    },
    {
    "title": {
    "en": "DeSantis Laughs Off Concerns About His Campaign—As GOP Eyes A New Trump Alternative"
    },
    "summary": {
    "en": "DeSantis allies have begun to publicly acknowledge that his campaign has failed to gain traction."
    },
    "link": "https://fotoscapes.com/lookbook/PYfy9vyco/desantis-laughs-off-concerns-about-his-campaign-as-gop-eyes-a-new-trump-alternative",
    "sourceLink": "https://www.forbes.com/sites/saradorn/2023/07/10/desantis-laughs-off-concerns-about-his-campaign-as-gop-eyes-a-new-trump-alternative/",
    "uid": "PYfy9vyco",
    "lbtype": "springboard",
    "interests": [
    "dofxEcL",
    "4xf2df3"
    ],
    "images": [
    {
    "link": "https://media.fotoscapes.com/imgs/3x/fy/bV/vS/6/3xfybVvS6-e1fl032nse.jpg",
    "width": 1280,
    "height": 853
    },
    {
    "link": "https://media.fotoscapes.com/imgs/3x/fy/bV/vS/6/3xfybVvS6-Onfb1xJNhJ.jpg",
    "width": 1024,
    "height": 683
    },
    {
    "link": "https://media.fotoscapes.com/imgs/3x/fy/bV/vS/6/3xfybVvS6-01fkoO42iA.jpg",
    "width": 850,
    "height": 567
    }
    ],
    "previews": [
    {
    "link": "https://media.fotoscapes.com/imgs/3x/fy/bV/vS/6/3xfybVvS6-r6fja60jhV.jpg",
    "width": 675,
    "height": 300
    },
    {
    "link": "https://media.fotoscapes.com/imgs/3x/fy/bV/vS/6/3xfybVvS6-oNf0jyOASA.jpg",
    "width": 450,
    "height": 200
    },
    {
    "link": "https://media.fotoscapes.com/imgs/3x/fy/bV/vS/6/3xfybVvS6-Xofr9bx1Sm.jpg",
    "width": 360,
    "height": 160
    },
    {
    "link": "https://media.fotoscapes.com/imgs/3x/fy/bV/vS/6/3xfybVvS6-PYfx1vDoI7.jpg",
    "width": 270,
    "height": 120
    }
    ],
    "kb": {
    "startX": 0.5,
    "startY": 0.5,
    "startB": 0.4444,
    "endX": 0.5,
    "endY": 0.3667,
    "endB": 0.4444
    },
    "owner": "Forbes",
    "brandLogo": "https://media.fotoscapes.com/imgs/e1/fr/JQ/sE/e1frJQsE-VPfjpLx1Fy.png",
    "brandLogoDark": "https://media.fotoscapes.com/imgs/e1/fr/JQ/sE/e1frJQsE-bYfRJYGAuQ.png",
    "numImages": 1,
    "boost": 0,
    "promote": false,
    "publishOn": "2023-07-10T16:39:31Z",
    "scheduledOn": "2023-07-10T17:01:06Z"
    },
    {
    "title": {
    "en": "Maine father drowns while trying to save daughters swept out to deep water of pond"
    },
    "summary": {
    "en": "A father drowned while trying to save his daughters from a pond in Maine on Saturday, according to the Maine Warden Service."
    },
    "link": "https://fotoscapes.com/lookbook/oNf4xyrHw/maine-father-drowns-while-trying-to-save-daughters-swept-out-to-deep-water-of-pond",
    "sourceLink": "https://www.nbcnews.com/news/us-news/maine-father-drowns-trying-daughters-swept-deep-water-pond-rcna93409",
    "uid": "oNf4xyrHw",
    "lbtype": "springboard",
    "interests": [
    "4xf2df3"
    ],
    "images": [
    {
    "link": "https://media.fotoscapes.com/imgs/26/f1/v9/pH/w/26f1v9pHw-q6fylQAGHY.jpg",
    "width": 1280,
    "height": 640
    },
    {
    "link": "https://media.fotoscapes.com/imgs/26/f1/v9/pH/w/26f1v9pHw-ANfZNq1Ls0.jpg",
    "width": 1024,
    "height": 512
    },
    {
    "link": "https://media.fotoscapes.com/imgs/26/f1/v9/pH/w/26f1v9pHw-4xfo10XjTl.jpg",
    "width": 850,
    "height": 425
    }
    ],
    "previews": [
    {
    "link": "https://media.fotoscapes.com/imgs/26/f1/v9/pH/w/26f1v9pHw-ZofexQR4Hg.jpg",
    "width": 675,
    "height": 300
    },
    {
    "link": "https://media.fotoscapes.com/imgs/26/f1/v9/pH/w/26f1v9pHw-jxfnzB2yf9.jpg",
    "width": 450,
    "height": 200
    },
    {
    "link": "https://media.fotoscapes.com/imgs/26/f1/v9/pH/w/26f1v9pHw-w6f9vNRqI0.jpg",
    "width": 360,
    "height": 160
    },
    {
    "link": "https://media.fotoscapes.com/imgs/26/f1/v9/pH/w/26f1v9pHw-lAfd47bRFe.jpg",
    "width": 270,
    "height": 120
    }
    ],
    "kb": {
    "startX": 0.5,
    "startY": 0.5,
    "startB": 0.4444,
    "endX": 0.5,
    "endY": 0.4558,
    "endB": 0.4444
    },
    "owner": "NBC News",
    "brandLogo": "https://media.fotoscapes.com/imgs/6J/fV/er/hL/6JfVerhL-6JfzZY3bsq.png",
    "brandLogoDark": "https://media.fotoscapes.com/imgs/6J/fV/er/hL/6JfVerhL-g6fNEVbLIk.png",
    "numImages": 1,
    "boost": 0,
    "promote": false,
    "publishOn": "2023-07-10T16:43:44Z",
    "scheduledOn": "2023-07-10T17:01:04Z"
    },
    {
    "title": {
    "en": "Who is pitching at 2023 Home Run Derby? Here's who will throw to each hitter, from Pete Alonso to Adley Rutschman"
    },
    "summary": {
    "en": "Here's everything you need to know about the second-most important group of people at the 2023 Home Run Derby: the pitchers."
    },
    "link": "https://fotoscapes.com/lookbook/QafP3ewux/who-is-pitching-at-2023-home-run-derby-heres-who-will-throw-to-each-hitter-from-pete-alonso-to-adley-rutschman",
    "sourceLink": "https://www.sportingnews.com/us/mlb/news/home-run-derby-pitchers-2023-throw-hitter/rezdcbkpffmkek4y0onpkogx",
    "uid": "QafP3ewux",
    "lbtype": "springboard",
    "interests": [
    "01f7Pco",
    "4xf2df3"
    ],
    "images": [
    {
    "link": "https://media.fotoscapes.com/imgs/w6/fL/bN/AH/g/w6fLbNAHg-26fEe9kquy.jpg",
    "width": 1280,
    "height": 720
    },
    {
    "link": "https://media.fotoscapes.com/imgs/w6/fL/bN/AH/g/w6fLbNAHg-97fW6LGRIL.jpg",
    "width": 1024,
    "height": 576
    },
    {
    "link": "https://media.fotoscapes.com/imgs/w6/fL/bN/AH/g/w6fLbNAHg-3xfpxVaeCp.jpg",
    "width": 850,
    "height": 478
    }
    ],
    "previews": [
    {
    "link": "https://media.fotoscapes.com/imgs/w6/fL/bN/AH/g/w6fLbNAHg-01fkoOE2fA.jpg",
    "width": 675,
    "height": 300
    },
    {
    "link": "https://media.fotoscapes.com/imgs/w6/fL/bN/AH/g/w6fLbNAHg-7mfNkBD3Cx.jpg",
    "width": 450,
    "height": 200
    },
    {
    "link": "https://media.fotoscapes.com/imgs/w6/fL/bN/AH/g/w6fLbNAHg-VPfDaNdJuy.jpg",
    "width": 360,
    "height": 160
    },
    {
    "link": "https://media.fotoscapes.com/imgs/w6/fL/bN/AH/g/w6fLbNAHg-p6fLwp3Qs0.jpg",
    "width": 270,
    "height": 120
    }
    ],
    "kb": {
    "startX": 0.5,
    "startY": 0.5,
    "startB": 0.4444,
    "endX": 0.5,
    "endY": 0.416,
    "endB": 0.4444
    },
    "owner": "Sporting News",
    "brandLogo": "https://media.fotoscapes.com/imgs/VP/fj/Y3/S7/VPfjY3S7-x6fBEdXbCY.png",
    "brandLogoDark": "https://media.fotoscapes.com/imgs/VP/fj/Y3/S7/VPfjY3S7-e1f1vlRBfe.png",
    "numImages": 1,
    "boost": 0,
    "promote": false,
    "publishOn": "2023-07-10T16:29:04Z",
    "scheduledOn": "2023-07-10T17:00:05Z"
    },
    {
    "title": {
    "en": "NHL trade targets 2023: William Nylander, Erik Karlsson headline players that could be moved this offseason"
    },
    "summary": {
    "en": "A majority of the free agents have been signed, but that doesn't mean that teams can't make upgrades through trades."
    },
    "link": "https://fotoscapes.com/lookbook/p6fgzpxcN/nhl-trade-targets-2023-william-nylander-erik-karlsson-headline-players-that-could-be-moved-this-offseason",
    "sourceLink": "https://www.sportingnews.com/us/nhl/news/nhl-trade-targets-2023-offseason/v55mzhoedrellu92bii1pmqf",
    "uid": "p6fgzpxcN",
    "lbtype": "springboard",
    "interests": [
    "01f7Pco",
    "4xf2df3"
    ],
    "images": [
    {
    "link": "https://media.fotoscapes.com/imgs/jx/f0/XB/Vu/z/jxf0XBVuz-97fW6LGafL.jpg",
    "width": 1280,
    "height": 720
    },
    {
    "link": "https://media.fotoscapes.com/imgs/jx/f0/XB/Vu/z/jxf0XBVuz-3xfpxVa1Fp.jpg",
    "width": 1024,
    "height": 576
    },
    {
    "link": "https://media.fotoscapes.com/imgs/jx/f0/XB/Vu/z/jxf0XBVuz-x6fdeOgbUY.jpg",
    "width": 850,
    "height": 478
    }
    ],
    "previews": [
    {
    "link": "https://media.fotoscapes.com/imgs/jx/f0/XB/Vu/z/jxf0XBVuz-ZofexQq4sg.jpg",
    "width": 675,
    "height": 300
    },
    {
    "link": "https://media.fotoscapes.com/imgs/jx/f0/XB/Vu/z/jxf0XBVuz-jxfnzBeyt9.jpg",
    "width": 450,
    "height": 200
    },
    {
    "link": "https://media.fotoscapes.com/imgs/jx/f0/XB/Vu/z/jxf0XBVuz-w6f9vNBqI0.jpg",
    "width": 360,
    "height": 160
    },
    {
    "link": "https://media.fotoscapes.com/imgs/jx/f0/XB/Vu/z/jxf0XBVuz-lAfd47xRHe.jpg",
    "width": 270,
    "height": 120
    }
    ],
    "kb": {
    "startX": 0.5,
    "startY": 0.5,
    "startB": 0.4444,
    "endX": 0.5,
    "endY": 0.416,
    "endB": 0.4444
    },
    "owner": "Sporting News",
    "brandLogo": "https://media.fotoscapes.com/imgs/VP/fj/Y3/S7/VPfjY3S7-x6fBEdXbCY.png",
    "brandLogoDark": "https://media.fotoscapes.com/imgs/VP/fj/Y3/S7/VPfjY3S7-e1f1vlRBfe.png",
    "numImages": 1,
    "boost": 0,
    "promote": false,
    "publishOn": "2023-07-10T16:58:55Z",
    "scheduledOn": "2023-07-10T17:00:01Z"
    },
    {
    "title": {
    "en": "Alex Morgan's Tea Party & Naeher's Save: No. 10 | Most Memorable Moments in Women's World Cup History"
    },
    "summary": {
    "en": "Check out the 10th-most memorable moment in Women's World Cup history. This took place in 2019 between the United States and England. See what happened here!"
    },
    "link": "https://fotoscapes.com/lookbook/aYfmXgAcO/alex-morgans-tea-party-and-naehers-save-no-10-most-memorable-moments-in-womens-world-cup-history",
    "sourceLink": "https://www.foxsports.com/watch/play-681d0e2fc000a01",
    "uid": "aYfmXgAcO",
    "lbtype": "springboard",
    "interests": [
    "01f7Pco",
    "4xf2df3"
    ],
    "images": [
    {
    "link": "https://media.fotoscapes.com/imgs/VP/fy/mg/zF/J/VPfymgzFJ-1DfWn9qNTj.jpg",
    "width": 1280,
    "height": 720
    },
    {
    "link": "https://media.fotoscapes.com/imgs/VP/fy/mg/zF/J/VPfymgzFJ-WJfX2p0XcL.jpg",
    "width": 1024,
    "height": 576
    },
    {
    "link": "https://media.fotoscapes.com/imgs/VP/fy/mg/zF/J/VPfymgzFJ-6JfY4BLaIq.jpg",
    "width": 850,
    "height": 478
    }
    ],
    "previews": [
    {
    "link": "https://media.fotoscapes.com/imgs/VP/fy/mg/zF/J/VPfymgzFJ-jxfnz1g7u9.jpg",
    "width": 675,
    "height": 300
    },
    {
    "link": "https://media.fotoscapes.com/imgs/VP/fy/mg/zF/J/VPfymgzFJ-lAfd43R3Se.jpg",
    "width": 450,
    "height": 200
    },
    {
    "link": "https://media.fotoscapes.com/imgs/VP/fy/mg/zF/J/VPfymgzFJ-26fEeNyGhy.jpg",
    "width": 360,
    "height": 160
    },
    {
    "link": "https://media.fotoscapes.com/imgs/VP/fy/mg/zF/J/VPfymgzFJ-3xfpxk0EUp.jpg",
    "width": 270,
    "height": 120
    }
    ],
    "kb": {
    "startX": 0.5,
    "startY": 0.5,
    "startB": 0.4444,
    "endX": 0.5,
    "endY": 0.416,
    "endB": 0.4444
    },
    "owner": "Fox Sports",
    "brandLogo": "https://media.fotoscapes.com/imgs/aY/fO/Oj/IQ/aYfOOjIQ-NZfrvz0vFz.png",
    "brandLogoDark": "https://media.fotoscapes.com/imgs/aY/fO/Oj/IQ/aYfOOjIQ-lAfklngyhe.png",
    "numImages": 1,
    "boost": 0,
    "promote": false,
    "publishOn": "2023-07-10T16:42:31Z",
    "scheduledOn": "2023-07-10T16:47:53Z"
    },
    {
    "title": {
    "en": "All-species COVID-19 test can track disease in wild, domesticated animals"
    },
    "summary": {
    "en": "Researchers can now detect the COVID-19 virus in any animal using a new all-species test."
    },
    "link": "https://fotoscapes.com/lookbook/Gvf6dgqf4/all-species-covid-19-test-can-track-disease-in-wild-domesticated-animals",
    "sourceLink": "https://www.upi.com/Science_News/2023/07/10/all-species-COVID-19-test/9051688999414/",
    "uid": "Gvf6dgqf4",
    "lbtype": "article",
    "interests": [
    "4xf2df3"
    ],
    "images": [
    {
    "link": "https://media.fotoscapes.com/imgs/3x/fy/bn/Xt/6/3xfybnXt6-4xfo1qaESl.jpg",
    "width": 1024,
    "height": 682
    },
    {
    "link": "https://media.fotoscapes.com/imgs/3x/fy/bn/Xt/6/3xfybnXt6-dof4BPdZFV.jpg",
    "width": 850,
    "height": 566
    }
    ],
    "previews": [
    {
    "link": "https://media.fotoscapes.com/imgs/3x/fy/bn/Xt/6/3xfybnXt6-w6f9vVBDT0.jpg",
    "width": 675,
    "height": 300
    },
    {
    "link": "https://media.fotoscapes.com/imgs/3x/fy/bn/Xt/6/3xfybnXt6-lAfd43xESe.jpg",
    "width": 450,
    "height": 200
    },
    {
    "link": "https://media.fotoscapes.com/imgs/3x/fy/bn/Xt/6/3xfybnXt6-aYfbEe2yF0.jpg",
    "width": 360,
    "height": 160
    },
    {
    "link": "https://media.fotoscapes.com/imgs/3x/fy/bn/Xt/6/3xfybnXt6-26fEeNk1uy.jpg",
    "width": 270,
    "height": 120
    }
    ],
    "kb": {
    "startX": 0.5,
    "startY": 0.5,
    "startB": 0.4444,
    "endX": 0.5,
    "endY": 0.367,
    "endB": 0.4444
    },
    "owner": "UPI",
    "brandLogo": "https://media.fotoscapes.com/imgs/ng/fd/YQ/Hg/ngfdYQHg-ZofQ9qwSg.png",
    "brandLogoDark": "https://media.fotoscapes.com/imgs/ng/fd/YQ/Hg/ngfdYQHg-ZofOzDPCg.png",
    "numImages": 1,
    "boost": 0,
    "promote": false,
    "publishOn": "2023-07-10T15:55:26Z",
    "scheduledOn": "2023-07-10T16:46:09Z"
    },
    {
    "title": {
    "en": "APD Seeking Community Assistance in Locating a Missing Endangered Adult (SILVER ALERT)"
    },
    "summary": {},
    "link": "https://fotoscapes.com/lookbook/oNf4xzPIw/apd-seeking-community-assistance-in-locating-a-missing-endangered-adult-silver-alert",
    "sourceLink": "https://austintxnews.com/stories/645506357-apd-seeking-community-assistance-in-locating-a-missing-endangered-adult-silver-alert",
    "uid": "oNf4xzPIw",
    "lbtype": "springboard",
    "interests": [
    "4xf2df3"
    ],
    "images": [
    {
    "link": "https://media.fotoscapes.com/imgs/aY/fz/Nn/AT/1/aYfzNnAT1-Gvf9kwXAua.jpg",
    "width": 400,
    "height": 225
    }
    ],
    "previews": [
    {
    "link": "https://media.fotoscapes.com/imgs/aY/fz/Nn/AT/1/aYfzNnAT1-yBfkB21gtO.jpg",
    "width": 360,
    "height": 160
    },
    {
    "link": "https://media.fotoscapes.com/imgs/aY/fz/Nn/AT/1/aYfzNnAT1-J1fWY29BUn.jpg",
    "width": 270,
    "height": 120
    }
    ],
    "kb": {
    "startX": 0.5,
    "startY": 0.5,
    "startB": 0.4444,
    "endX": 0.5,
    "endY": 0.416,
    "endB": 0.4444
    },
    "owner": "Austin News",
    "brandLogo": "https://media.fotoscapes.com/imgs/oN/f7/Pd/Sg/oNf7PdSg-dofD7ZAJFV.png",
    "brandLogoDark": "https://media.fotoscapes.com/imgs/oN/f7/Pd/Sg/oNf7PdSg-RqfkvplkHX.png",
    "numImages": 1,
    "boost": 0,
    "promote": false,
    "publishOn": "2023-07-07T11:10:00Z",
    "scheduledOn": "2023-07-10T16:46:06Z"
    },
    {
    "title": {
    "en": "APD Detectives Arrest a Man in Connection to a Robbery"
    },
    "summary": {},
    "link": "https://fotoscapes.com/lookbook/XofX7glIa/apd-detectives-arrest-a-man-in-connection-to-a-robbery",
    "sourceLink": "https://austintxnews.com/stories/645506301-apd-detectives-arrest-a-man-in-connection-to-a-robbery",
    "uid": "XofX7glIa",
    "lbtype": "springboard",
    "interests": [
    "4xf2df3"
    ],
    "images": [
    {
    "link": "https://media.fotoscapes.com/imgs/26/f1/vX/ls/w/26f1vXlsw-ngfeZgRgiz.jpg",
    "width": 400,
    "height": 225
    }
    ],
    "previews": [
    {
    "link": "https://media.fotoscapes.com/imgs/26/f1/vX/ls/w/26f1vXlsw-m7fBLVgpUR.jpg",
    "width": 360,
    "height": 160
    },
    {
    "link": "https://media.fotoscapes.com/imgs/26/f1/vX/ls/w/26f1vXlsw-DkfDALxNHR.jpg",
    "width": 270,
    "height": 120
    }
    ],
    "kb": {
    "startX": 0.5,
    "startY": 0.5,
    "startB": 0.4444,
    "endX": 0.5,
    "endY": 0.416,
    "endB": 0.4444
    },
    "owner": "Austin News",
    "brandLogo": "https://media.fotoscapes.com/imgs/oN/f7/Pd/Sg/oNf7PdSg-dofD7ZAJFV.png",
    "brandLogoDark": "https://media.fotoscapes.com/imgs/oN/f7/Pd/Sg/oNf7PdSg-RqfkvplkHX.png",
    "numImages": 1,
    "boost": 0,
    "promote": false,
    "publishOn": "2023-07-07T11:10:00Z",
    "scheduledOn": "2023-07-10T16:46:06Z"
    },
    {
    "title": {
    "en": "Summer Street Maintenance Program underway across Austin"
    },
    "summary": {},
    "link": "https://fotoscapes.com/lookbook/PYfy9gkfo/summer-street-maintenance-program-underway-across-austin",
    "sourceLink": "https://austintxnews.com/stories/645506271-summer-street-maintenance-program-underway-across-austin",
    "uid": "PYfy9gkfo",
    "lbtype": "springboard",
    "interests": [
    "4xf2df3"
    ],
    "images": [
    {
    "link": "https://media.fotoscapes.com/imgs/97/fl/Zg/oi/B/97flZgoiB-WJfX2p37fL.jpg",
    "width": 400,
    "height": 225
    }
    ],
    "previews": [
    {
    "link": "https://media.fotoscapes.com/imgs/97/fl/Zg/oi/B/97flZgoiB-g6fVB3mguk.jpg",
    "width": 360,
    "height": 160
    },
    {
    "link": "https://media.fotoscapes.com/imgs/97/fl/Zg/oi/B/97flZgoiB-q6fylNZZSY.jpg",
    "width": 270,
    "height": 120
    }
    ],
    "kb": {
    "startX": 0.5,
    "startY": 0.5,
    "startB": 0.4444,
    "endX": 0.5,
    "endY": 0.416,
    "endB": 0.4444
    },
    "owner": "Austin News",
    "brandLogo": "https://media.fotoscapes.com/imgs/oN/f7/Pd/Sg/oNf7PdSg-dofD7ZAJFV.png",
    "brandLogoDark": "https://media.fotoscapes.com/imgs/oN/f7/Pd/Sg/oNf7PdSg-RqfkvplkHX.png",
    "numImages": 1,
    "boost": 0,
    "promote": false,
    "publishOn": "2023-07-07T11:10:00Z",
    "scheduledOn": "2023-07-10T16:46:06Z"
    },
    {
    "title": {
    "en": "Artist Career Training Opens for Austin-area Creatives"
    },
    "summary": {},
    "link": "https://fotoscapes.com/lookbook/QafP3g0Cx/artist-career-training-opens-for-austin-area-creatives",
    "sourceLink": "https://austintxnews.com/stories/645505982-artist-career-training-opens-for-austin-area-creatives",
    "uid": "QafP3g0Cx",
    "lbtype": "springboard",
    "interests": [
    "4xf2df3"
    ],
    "images": [
    {
    "link": "https://media.fotoscapes.com/imgs/w6/fL/by/ZC/g/w6fLbyZCg-3xfpxkaWip.jpg",
    "width": 400,
    "height": 225
    }
    ],
    "previews": [
    {
    "link": "https://media.fotoscapes.com/imgs/w6/fL/by/ZC/g/w6fLbyZCg-Onfb1eAotJ.jpg",
    "width": 360,
    "height": 160
    },
    {
    "link": "https://media.fotoscapes.com/imgs/w6/fL/by/ZC/g/w6fLbyZCg-BBf69do3ID.jpg",
    "width": 270,
    "height": 120
    }
    ],
    "kb": {
    "startX": 0.5,
    "startY": 0.5,
    "startB": 0.4444,
    "endX": 0.5,
    "endY": 0.416,
    "endB": 0.4444
    },
    "owner": "Austin News",
    "brandLogo": "https://media.fotoscapes.com/imgs/oN/f7/Pd/Sg/oNf7PdSg-dofD7ZAJFV.png",
    "brandLogoDark": "https://media.fotoscapes.com/imgs/oN/f7/Pd/Sg/oNf7PdSg-RqfkvplkHX.png",
    "numImages": 1,
    "boost": 0,
    "promote": false,
    "publishOn": "2023-07-08T11:10:00Z",
    "scheduledOn": "2023-07-10T16:46:05Z"
    },
    {
    "title": {
    "en": "New York Fed: More consumers expect rise in home prices"
    },
    "summary": {
    "en": "Consumers expect to see home prices spike to their highest level in nearly a year, though the mood on inflation is improving somewhat, a survey from the New York Fed revealed on Monday."
    },
    "link": "https://fotoscapes.com/lookbook/r6fz7pNFo/new-york-fed-more-consumers-expect-rise-in-home-prices",
    "sourceLink": "https://www.upi.com/Top_News/US/2023/07/10/new-york-fed-survey-home-prices-inflation/2431689004791/",
    "uid": "r6fz7pNFo",
    "lbtype": "article",
    "interests": [
    "4xf2df3"
    ],
    "images": [
    {
    "link": "https://media.fotoscapes.com/imgs/Zo/f9/rk/1c/v/Zof9rk1cv-1DfWn9jEIj.jpg",
    "width": 800,
    "height": 532
    }
    ],
    "previews": [
    {
    "link": "https://media.fotoscapes.com/imgs/Zo/f9/rk/1c/v/Zof9rk1cv-ANfZNr41C0.jpg",
    "width": 675,
    "height": 300
    },
    {
    "link": "https://media.fotoscapes.com/imgs/Zo/f9/rk/1c/v/Zof9rk1cv-dof4BPnZfV.jpg",
    "width": 450,
    "height": 200
    },
    {
    "link": "https://media.fotoscapes.com/imgs/Zo/f9/rk/1c/v/Zof9rk1cv-LRfVp3qwi6.jpg",
    "width": 360,
    "height": 160
    },
    {
    "link": "https://media.fotoscapes.com/imgs/Zo/f9/rk/1c/v/Zof9rk1cv-jxfnz1bji9.jpg",
    "width": 270,
    "height": 120
    }
    ],
    "kb": {
    "startX": 0.5,
    "startY": 0.5,
    "startB": 0.4444,
    "endX": 0.5,
    "endY": 0.3673,
    "endB": 0.4444
    },
    "owner": "UPI",
    "brandLogo": "https://media.fotoscapes.com/imgs/ng/fd/YQ/Hg/ngfdYQHg-ZofQ9qwSg.png",
    "brandLogoDark": "https://media.fotoscapes.com/imgs/ng/fd/YQ/Hg/ngfdYQHg-ZofOzDPCg.png",
    "numImages": 2,
    "boost": 0,
    "promote": false,
    "publishOn": "2023-07-10T16:34:56Z",
    "scheduledOn": "2023-07-10T16:46:05Z"
    },
    {
    "title": {
    "en": "City of Austin Announces Community Showcase Event Celebrating the Organizational Capacity Building Initiative for Homelessness Response System"
    },
    "summary": {},
    "link": "https://fotoscapes.com/lookbook/VPfwBg9fz/city-of-austin-announces-community-showcase-event-celebrating-the-organizational-capacity-building-initiative-for-homelessness",
    "sourceLink": "https://austintxnews.com/stories/645505955-city-of-austin-announces-community-showcase-event-celebrating-the-organizational-capacity-building-initiative-for-homelessness-response-system",
    "uid": "VPfwBg9fz",
    "lbtype": "springboard",
    "interests": [
    "4xf2df3"
    ],
    "images": [
    {
    "link": "https://media.fotoscapes.com/imgs/do/fa/gm/qI/X/dofagmqIX-BBf69dA3cD.jpg",
    "width": 400,
    "height": 225
    }
    ],
    "previews": [
    {
    "link": "https://media.fotoscapes.com/imgs/do/fa/gm/qI/X/dofagmqIX-7mfNk1LEsx.jpg",
    "width": 360,
    "height": 160
    },
    {
    "link": "https://media.fotoscapes.com/imgs/do/fa/gm/qI/X/dofagmqIX-NZf7wv6Vhz.jpg",
    "width": 270,
    "height": 120
    }
    ],
    "kb": {
    "startX": 0.5,
    "startY": 0.5,
    "startB": 0.4444,
    "endX": 0.5,
    "endY": 0.416,
    "endB": 0.4444
    },
    "owner": "Austin News",
    "brandLogo": "https://media.fotoscapes.com/imgs/oN/f7/Pd/Sg/oNf7PdSg-dofD7ZAJFV.png",
    "brandLogoDark": "https://media.fotoscapes.com/imgs/oN/f7/Pd/Sg/oNf7PdSg-RqfkvplkHX.png",
    "numImages": 1,
    "boost": 0,
    "promote": false,
    "publishOn": "2023-07-08T11:10:00Z",
    "scheduledOn": "2023-07-10T16:46:01Z"
    },
    {
    "title": {
    "en": "Traumatic brain injury may lead to unique form of depression"
    },
    "summary": {
    "en": "Depression that arises after a head injury may be its own distinct condition -- one that differs from traditional major depressive disorder, a new study suggests."
    },
    "link": "https://fotoscapes.com/lookbook/NZfoaARFl/traumatic-brain-injury-may-lead-to-unique-form-of-depression",
    "sourceLink": "https://www.upi.com/Health_News/2023/07/10/depression-brain-injury/8251688999428/",
    "uid": "NZfoaARFl",
    "lbtype": "article",
    "interests": [
    "4xf2df3"
    ],
    "images": [
    {
    "link": "https://media.fotoscapes.com/imgs/4x/fD/Ok/GF/a/4xfDOkGFa-jxfnz13jH9.jpg",
    "width": 1024,
    "height": 682
    },
    {
    "link": "https://media.fotoscapes.com/imgs/4x/fD/Ok/GF/a/4xfDOkGFa-w6f9vV2DS0.jpg",
    "width": 850,
    "height": 566
    }
    ],
    "previews": [
    {
    "link": "https://media.fotoscapes.com/imgs/4x/fD/Ok/GF/a/4xfDOkGFa-3xfpxkOWCp.jpg",
    "width": 675,
    "height": 300
    },
    {
    "link": "https://media.fotoscapes.com/imgs/4x/fD/Ok/GF/a/4xfDOkGFa-x6fdeYjphY.jpg",
    "width": 450,
    "height": 200
    },
    {
    "link": "https://media.fotoscapes.com/imgs/4x/fD/Ok/GF/a/4xfDOkGFa-v4fzxkLBub.jpg",
    "width": 360,
    "height": 160
    },
    {
    "link": "https://media.fotoscapes.com/imgs/4x/fD/Ok/GF/a/4xfDOkGFa-e1fl0qBRhe.jpg",
    "width": 270,
    "height": 120
    }
    ],
    "kb": {
    "startX": 0.5,
    "startY": 0.5,
    "startB": 0.4444,
    "endX": 0.5,
    "endY": 0.367,
    "endB": 0.4444
    },
    "owner": "UPI",
    "brandLogo": "https://media.fotoscapes.com/imgs/ng/fd/YQ/Hg/ngfdYQHg-ZofQ9qwSg.png",
    "brandLogoDark": "https://media.fotoscapes.com/imgs/ng/fd/YQ/Hg/ngfdYQHg-ZofOzDPCg.png",
    "numImages": 1,
    "boost": 0,
    "promote": false,
    "publishOn": "2023-07-10T16:39:47Z",
    "scheduledOn": "2023-07-10T16:46:00Z"
    },
    {
    "title": {
    "en": "Austin-Bergstrom International Airport And Copa Airlines Celebrate Inaugural Nonstop Flight From Austin To Panama City, Panama"
    },
    "summary": {},
    "link": "https://fotoscapes.com/lookbook/BBf4lPYHA/austin-bergstrom-international-airport-and-copa-airlines-celebrate-inaugural-nonstop-flight-from-austin-to-panama-city-panama",
    "sourceLink": "https://austintxnews.com/stories/645505931-austin-bergstrom-international-airport-and-copa-airlines-celebrate-inaugural-nonstop-flight-from-austin-to-panama-city-panama",
    "uid": "BBf4lPYHA",
    "lbtype": "springboard",
    "interests": [
    "4xf2df3"
    ],
    "images": [
    {
    "link": "https://media.fotoscapes.com/imgs/g6/fk/PD/qS/b/g6fkPDqSb-LRfVp3z2h6.jpg",
    "width": 400,
    "height": 225
    }
    ],
    "previews": [
    {
    "link": "https://media.fotoscapes.com/imgs/g6/fk/PD/qS/b/g6fkPDqSb-ZofexD2yhg.jpg",
    "width": 360,
    "height": 160
    },
    {
    "link": "https://media.fotoscapes.com/imgs/g6/fk/PD/qS/b/g6fkPDqSb-jxfnz13AC9.jpg",
    "width": 270,
    "height": 120
    }
    ],
    "kb": {
    "startX": 0.5,
    "startY": 0.5,
    "startB": 0.4444,
    "endX": 0.5,
    "endY": 0.416,
    "endB": 0.4444
    },
    "owner": "Austin News",
    "brandLogo": "https://media.fotoscapes.com/imgs/oN/f7/Pd/Sg/oNf7PdSg-dofD7ZAJFV.png",
    "brandLogoDark": "https://media.fotoscapes.com/imgs/oN/f7/Pd/Sg/oNf7PdSg-RqfkvplkHX.png",
    "numImages": 1,
    "boost": 0,
    "promote": false,
    "publishOn": "2023-07-09T11:55:00Z",
    "scheduledOn": "2023-07-10T16:45:56Z"
    },
    {
    "title": {
    "en": "Deep Eddy Pool Expands Operational Hours"
    },
    "summary": {},
    "link": "https://fotoscapes.com/lookbook/01fbRJVcJ/deep-eddy-pool-expands-operational-hours",
    "sourceLink": "https://austintxnews.com/stories/645506180-deep-eddy-pool-expands-operational-hours",
    "uid": "01fbRJVcJ",
    "lbtype": "springboard",
    "interests": [
    "4xf2df3"
    ],
    "images": [
    {
    "link": "https://media.fotoscapes.com/imgs/q6/f9/4J/NC/R/q6f94JNCR-aYfbEejaH0.jpg",
    "width": 400,
    "height": 225
    }
    ],
    "previews": [
    {
    "link": "https://media.fotoscapes.com/imgs/q6/f9/4J/NC/R/q6f94JNCR-97fW63dYCL.jpg",
    "width": 360,
    "height": 160
    },
    {
    "link": "https://media.fotoscapes.com/imgs/q6/f9/4J/NC/R/q6f94JNCR-3xfpxkRaFp.jpg",
    "width": 270,
    "height": 120
    }
    ],
    "kb": {
    "startX": 0.5,
    "startY": 0.5,
    "startB": 0.4444,
    "endX": 0.5,
    "endY": 0.416,
    "endB": 0.4444
    },
    "owner": "Austin News",
    "brandLogo": "https://media.fotoscapes.com/imgs/oN/f7/Pd/Sg/oNf7PdSg-dofD7ZAJFV.png",
    "brandLogoDark": "https://media.fotoscapes.com/imgs/oN/f7/Pd/Sg/oNf7PdSg-RqfkvplkHX.png",
    "numImages": 1,
    "boost": 0,
    "promote": false,
    "publishOn": "2023-07-08T11:10:00Z",
    "scheduledOn": "2023-07-10T16:45:56Z"
    },
    {
    "title": {
    "en": "Homicide Investigation in the 2800 block of Loyola Lane"
    },
    "summary": {},
    "link": "https://fotoscapes.com/lookbook/Onfz2klTY/homicide-investigation-in-the-2800-block-of-loyola-lane",
    "sourceLink": "https://austintxnews.com/stories/645505885-homicide-investigation-in-the-2800-block-of-loyola-lane",
    "uid": "Onfz2klTY",
    "lbtype": "springboard",
    "interests": [
    "4xf2df3"
    ],
    "images": [
    {
    "link": "https://media.fotoscapes.com/imgs/6J/fe/dX/nf/3/6JfedXnf3-WJfX2pl9uL.jpg",
    "width": 400,
    "height": 225
    }
    ],
    "previews": [
    {
    "link": "https://media.fotoscapes.com/imgs/6J/fe/dX/nf/3/6JfedXnf3-ANfZNr3yH0.jpg",
    "width": 360,
    "height": 160
    },
    {
    "link": "https://media.fotoscapes.com/imgs/6J/fe/dX/nf/3/6JfedXnf3-dof4BPkWcV.jpg",
    "width": 270,
    "height": 120
    }
    ],
    "kb": {
    "startX": 0.5,
    "startY": 0.5,
    "startB": 0.4444,
    "endX": 0.5,
    "endY": 0.416,
    "endB": 0.4444
    },
    "owner": "Austin News",
    "brandLogo": "https://media.fotoscapes.com/imgs/oN/f7/Pd/Sg/oNf7PdSg-dofD7ZAJFV.png",
    "brandLogoDark": "https://media.fotoscapes.com/imgs/oN/f7/Pd/Sg/oNf7PdSg-RqfkvplkHX.png",
    "numImages": 1,
    "boost": 0,
    "promote": false,
    "publishOn": "2023-07-09T11:55:00Z",
    "scheduledOn": "2023-07-10T16:45:55Z"
    },
    {
    "title": {
    "en": "Homicide Investigation in the 8800 block of Redfield Lane"
    },
    "summary": {},
    "link": "https://fotoscapes.com/lookbook/3xf30nXTN/homicide-investigation-in-the-8800-block-of-redfield-lane",
    "sourceLink": "https://austintxnews.com/stories/645505908-homicide-investigation-in-the-8800-block-of-redfield-lane",
    "uid": "3xf30nXTN",
    "lbtype": "springboard",
    "interests": [
    "4xf2df3"
    ],
    "images": [
    {
    "link": "https://media.fotoscapes.com/imgs/m7/fe/XW/Xc/m/m7feXWXcm-lAfd436GFe.jpg",
    "width": 400,
    "height": 225
    }
    ],
    "previews": [
    {
    "link": "https://media.fotoscapes.com/imgs/m7/fe/XW/Xc/m/m7feXWXcm-aYfbEeaau0.jpg",
    "width": 360,
    "height": 160
    },
    {
    "link": "https://media.fotoscapes.com/imgs/m7/fe/XW/Xc/m/m7feXWXcm-26fEeNxPty.jpg",
    "width": 270,
    "height": 120
    }
    ],
    "kb": {
    "startX": 0.5,
    "startY": 0.5,
    "startB": 0.4444,
    "endX": 0.5,
    "endY": 0.416,
    "endB": 0.4444
    },
    "owner": "Austin News",
    "brandLogo": "https://media.fotoscapes.com/imgs/oN/f7/Pd/Sg/oNf7PdSg-dofD7ZAJFV.png",
    "brandLogoDark": "https://media.fotoscapes.com/imgs/oN/f7/Pd/Sg/oNf7PdSg-RqfkvplkHX.png",
    "numImages": 1,
    "boost": 0,
    "promote": false,
    "publishOn": "2023-07-09T11:55:00Z",
    "scheduledOn": "2023-07-10T16:45:52Z"
    },
    {
    "title": {
    "en": "Traffic Fatality in the 7100 block of West SH 71"
    },
    "summary": {},
    "link": "https://fotoscapes.com/lookbook/lAfpRWxHQ/traffic-fatality-in-the-7100-block-of-west-sh-71",
    "sourceLink": "https://austintxnews.com/stories/645505867-traffic-fatality-in-the-7100-block-of-west-sh-71",
    "uid": "lAfpRWxHQ",
    "lbtype": "springboard",
    "interests": [
    "4xf2df3"
    ],
    "images": [
    {
    "link": "https://media.fotoscapes.com/imgs/ng/fz/2P/xC/4/ngfz2PxC4-Onfb1eYqSJ.jpg",
    "width": 400,
    "height": 225
    }
    ],
    "previews": [
    {
    "link": "https://media.fotoscapes.com/imgs/ng/fz/2P/xC/4/ngfz2PxC4-01fkozxlsA.jpg",
    "width": 360,
    "height": 160
    },
    {
    "link": "https://media.fotoscapes.com/imgs/ng/fz/2P/xC/4/ngfz2PxC4-NZf7wvkxFz.jpg",
    "width": 270,
    "height": 120
    }
    ],
    "kb": {
    "startX": 0.5,
    "startY": 0.5,
    "startB": 0.4444,
    "endX": 0.5,
    "endY": 0.416,
    "endB": 0.4444
    },
    "owner": "Austin News",
    "brandLogo": "https://media.fotoscapes.com/imgs/oN/f7/Pd/Sg/oNf7PdSg-dofD7ZAJFV.png",
    "brandLogoDark": "https://media.fotoscapes.com/imgs/oN/f7/Pd/Sg/oNf7PdSg-RqfkvplkHX.png",
    "numImages": 1,
    "boost": 0,
    "promote": false,
    "publishOn": "2023-07-10T12:00:14Z",
    "scheduledOn": "2023-07-10T16:45:43Z"
    },
    {
    "title": {
    "en": "Traffic Fatality in the 6600 block of FM 969 Road"
    },
    "summary": {},
    "link": "https://fotoscapes.com/lookbook/Onfz2kZcY/traffic-fatality-in-the-6600-block-of-fm-969-road",
    "sourceLink": "https://austintxnews.com/stories/645505701-traffic-fatality-in-the-6600-block-of-fm-969-road",
    "uid": "Onfz2kZcY",
    "lbtype": "springboard",
    "interests": [
    "4xf2df3"
    ],
    "images": [
    {
    "link": "https://media.fotoscapes.com/imgs/Xo/fJ/qk/lt/d/XofJqkltd-01fkozrdcA.jpg",
    "width": 400,
    "height": 225
    }
    ],
    "previews": [
    {
    "link": "https://media.fotoscapes.com/imgs/Xo/fJ/qk/lt/d/XofJqkltd-NZf7wvLLCz.jpg",
    "width": 360,
    "height": 160
    },
    {
    "link": "https://media.fotoscapes.com/imgs/Xo/fJ/qk/lt/d/XofJqkltd-VPfDabGEFy.jpg",
    "width": 270,
    "height": 120
    }
    ],
    "kb": {
    "startX": 0.5,
    "startY": 0.5,
    "startB": 0.4444,
    "endX": 0.5,
    "endY": 0.416,
    "endB": 0.4444
    },
    "owner": "Austin News",
    "brandLogo": "https://media.fotoscapes.com/imgs/oN/f7/Pd/Sg/oNf7PdSg-dofD7ZAJFV.png",
    "brandLogoDark": "https://media.fotoscapes.com/imgs/oN/f7/Pd/Sg/oNf7PdSg-RqfkvplkHX.png",
    "numImages": 1,
    "boost": 0,
    "promote": false,
    "publishOn": "2023-07-10T12:01:15Z",
    "scheduledOn": "2023-07-10T16:45:28Z"
    },
    {
    "title": {
    "en": "Williamson County schools enrollment of gifted and talented students is 16,360 students in the 2021-2022 school year"
    },
    "summary": {},
    "link": "https://fotoscapes.com/lookbook/e1fD4gAH7/williamson-county-schools-enrollment-of-gifted-and-talented-students-is-16-360-students-in-the-2021-2022-school-year",
    "sourceLink": "https://austintxnews.com/stories/645170991-williamson-county-schools-enrollment-of-gifted-and-talented-students-is-16-360-students-in-the-2021-2022-school-year",
    "uid": "e1fD4gAH7",
    "lbtype": "springboard",
    "interests": [
    "4xf2df3"
    ],
    "images": [
    {
    "link": "https://media.fotoscapes.com/imgs/oN/f9/XJ/PC/0/oNf9XJPC0-3xfpxkEnup.jpg",
    "width": 400,
    "height": 267
    }
    ],
    "previews": [
    {
    "link": "https://media.fotoscapes.com/imgs/oN/f9/XJ/PC/0/oNf9XJPC0-e1fl0qovse.jpg",
    "width": 360,
    "height": 160
    },
    {
    "link": "https://media.fotoscapes.com/imgs/oN/f9/XJ/PC/0/oNf9XJPC0-Onfb1eZeSJ.jpg",
    "width": 270,
    "height": 120
    }
    ],
    "kb": {
    "startX": 0.5,
    "startY": 0.5,
    "startB": 0.4444,
    "endX": 0.5,
    "endY": 0.3663,
    "endB": 0.4444
    },
    "owner": "Austin News",
    "brandLogo": "https://media.fotoscapes.com/imgs/oN/f7/Pd/Sg/oNf7PdSg-dofD7ZAJFV.png",
    "brandLogoDark": "https://media.fotoscapes.com/imgs/oN/f7/Pd/Sg/oNf7PdSg-RqfkvplkHX.png",
    "numImages": 1,
    "boost": 0,
    "promote": false,
    "publishOn": "2023-07-10T14:07:47Z",
    "scheduledOn": "2023-07-10T16:45:26Z"
    },
    {
    "title": {
    "en": "Police assessing whether BBC presenter committed criminal offense"
    },
    "summary": {
    "en": "London's Metropolitan Police said Monday it was assessing whether there was evidence that a BBC presenter accused of sexual misconduct has committed a criminal offense."
    },
    "link": "https://fotoscapes.com/lookbook/Gvf6dYvU4/police-assessing-whether-bbc-presenter-committed-criminal-offense",
    "sourceLink": "https://www.cnn.com/2023/07/10/uk/bbc-presenter-teen-intl-gbr/index.html",
    "uid": "Gvf6dYvU4",
    "lbtype": "springboard",
    "interests": [
    "4xf2df3"
    ],
    "images": [
    {
    "link": "https://media.fotoscapes.com/imgs/g6/fk/PO/qF/b/g6fkPOqFb-ZofexDdrcg.jpg",
    "width": 1024,
    "height": 576
    },
    {
    "link": "https://media.fotoscapes.com/imgs/g6/fk/PO/qF/b/g6fkPOqFb-jxfnz1plf9.jpg",
    "width": 850,
    "height": 478
    }
    ],
    "previews": [
    {
    "link": "https://media.fotoscapes.com/imgs/g6/fk/PO/qF/b/g6fkPOqFb-26fEeN7rIy.jpg",
    "width": 675,
    "height": 300
    },
    {
    "link": "https://media.fotoscapes.com/imgs/g6/fk/PO/qF/b/g6fkPOqFb-97fW63N3cL.jpg",
    "width": 450,
    "height": 200
    },
    {
    "link": "https://media.fotoscapes.com/imgs/g6/fk/PO/qF/b/g6fkPOqFb-3xfpxkNVTp.jpg",
    "width": 360,
    "height": 160
    },
    {
    "link": "https://media.fotoscapes.com/imgs/g6/fk/PO/qF/b/g6fkPOqFb-x6fdeYa6cY.jpg",
    "width": 270,
    "height": 120
    }
    ],
    "kb": {
    "startX": 0.5,
    "startY": 0.5,
    "startB": 0.4444,
    "endX": 0.5,
    "endY": 0.4159,
    "endB": 0.4444
    },
    "owner": "CNN",
    "brandLogo": "https://media.fotoscapes.com/imgs/J1/fk/1a/ID/J1fk1aID-6JfovXz3Hq.png",
    "brandLogoDark": "https://media.fotoscapes.com/imgs/J1/fk/1a/ID/J1fk1aID-g6f9aDo1fk.png",
    "numImages": 1,
    "boost": 0,
    "promote": false,
    "publishOn": "2023-07-10T15:48:10Z",
    "scheduledOn": "2023-07-10T16:41:45Z"
    },
    {
    "title": {
    "en": "Twitter's future is in doubt as Threads tops 100 million users"
    },
    "summary": {
    "en": "Twitter has weathered months, if not years, of mismanagement as well as mass layoffs, frequent service disruptions and an exodus of top advertisers, but the launch of a rival app from Meta could prove to be the final straw."
    },
    "link": "https://fotoscapes.com/lookbook/PYfy9dATo/twitters-future-is-in-doubt-as-threads-tops-100-million-users",
    "sourceLink": "https://www.cnn.com/2023/07/10/tech/twitter-threads-future/index.html",
    "uid": "PYfy9dATo",
    "lbtype": "springboard",
    "interests": [
    "4xf2df3"
    ],
    "images": [
    {
    "link": "https://media.fotoscapes.com/imgs/6J/fe/dD/nu/3/6JfedDnu3-1DfWn90Yhj.jpg",
    "width": 1024,
    "height": 576
    },
    {
    "link": "https://media.fotoscapes.com/imgs/6J/fe/dD/nu/3/6JfedDnu3-WJfX2pgyIL.jpg",
    "width": 850,
    "height": 478
    }
    ],
    "previews": [
    {
    "link": "https://media.fotoscapes.com/imgs/6J/fe/dD/nu/3/6JfedDnu3-ANfZNry6c0.jpg",
    "width": 675,
    "height": 300
    },
    {
    "link": "https://media.fotoscapes.com/imgs/6J/fe/dD/nu/3/6JfedDnu3-4xfo1qx9Cl.jpg",
    "width": 450,
    "height": 200
    },
    {
    "link": "https://media.fotoscapes.com/imgs/6J/fe/dD/nu/3/6JfedDnu3-dof4BPpRfV.jpg",
    "width": 360,
    "height": 160
    },
    {
    "link": "https://media.fotoscapes.com/imgs/6J/fe/dD/nu/3/6JfedDnu3-RqfdZ6gZfX.jpg",
    "width": 270,
    "height": 120
    }
    ],
    "kb": {
    "startX": 0.5,
    "startY": 0.5,
    "startB": 0.4444,
    "endX": 0.5,
    "endY": 0.4159,
    "endB": 0.4444
    },
    "owner": "CNN",
    "brandLogo": "https://media.fotoscapes.com/imgs/J1/fk/1a/ID/J1fk1aID-6JfovXz3Hq.png",
    "brandLogoDark": "https://media.fotoscapes.com/imgs/J1/fk/1a/ID/J1fk1aID-g6f9aDo1fk.png",
    "numImages": 1,
    "boost": 0,
    "promote": false,
    "publishOn": "2023-07-10T16:02:15Z",
    "scheduledOn": "2023-07-10T16:41:44Z"
    },
    {
    "title": {
    "en": "Iranian rapper Toomaj Salehi sentenced to six years in prison, avoiding death penalty"
    },
    "summary": {
    "en": "Dissident Iranian rapper Toomaj Salehi, arrested last October for supporting the protest movement in Iran last year, has been sentenced to six years and three months in prison, his official Twitter page said Monday."
    },
    "link": "https://fotoscapes.com/lookbook/oNf4xDoTw/iranian-rapper-toomaj-salehi-sentenced-to-six-years-in-prison-avoiding-death-penalty",
    "sourceLink": "https://www.cnn.com/2023/07/10/middleeast/toomaj-salehi-iran-rapper-prison-intl/index.html",
    "uid": "oNf4xDoTw",
    "lbtype": "springboard",
    "interests": [
    "4xf2df3"
    ],
    "images": [
    {
    "link": "https://media.fotoscapes.com/imgs/1D/f1/bV/Zi/W/1Df1bVZiW-01fkozJGsA.jpg",
    "width": 1024,
    "height": 576
    },
    {
    "link": "https://media.fotoscapes.com/imgs/1D/f1/bV/Zi/W/1Df1bVZiW-NZf7wvAzSz.jpg",
    "width": 850,
    "height": 478
    }
    ],
    "previews": [
    {
    "link": "https://media.fotoscapes.com/imgs/1D/f1/bV/Zi/W/1Df1bVZiW-bYfVBbk7tQ.jpg",
    "width": 675,
    "height": 300
    },
    {
    "link": "https://media.fotoscapes.com/imgs/1D/f1/bV/Zi/W/1Df1bVZiW-QafyLBz2tN.jpg",
    "width": 450,
    "height": 200
    },
    {
    "link": "https://media.fotoscapes.com/imgs/1D/f1/bV/Zi/W/1Df1bVZiW-r6fjaYkxSV.jpg",
    "width": 360,
    "height": 160
    },
    {
    "link": "https://media.fotoscapes.com/imgs/1D/f1/bV/Zi/W/1Df1bVZiW-Xofr9okdcm.jpg",
    "width": 270,
    "height": 120
    }
    ],
    "kb": {
    "startX": 0.5,
    "startY": 0.5,
    "startB": 0.4444,
    "endX": 0.5,
    "endY": 0.4159,
    "endB": 0.4444
    },
    "owner": "CNN",
    "brandLogo": "https://media.fotoscapes.com/imgs/J1/fk/1a/ID/J1fk1aID-6JfovXz3Hq.png",
    "brandLogoDark": "https://media.fotoscapes.com/imgs/J1/fk/1a/ID/J1fk1aID-g6f9aDo1fk.png",
    "numImages": 1,
    "boost": 0,
    "promote": false,
    "publishOn": "2023-07-10T16:12:55Z",
    "scheduledOn": "2023-07-10T16:41:43Z"
    },
    {
    "title": {
    "en": "The New York Times will shut down its sports desk and shift coverage to The Athletic"
    },
    "summary": {
    "en": "The New York Times will shut down its sports desk and shift its daily coverage of athletes and teams to The Athletic, the newspaper announced Monday."
    },
    "link": "https://fotoscapes.com/lookbook/QafP3WPfx/the-new-york-times-will-shut-down-its-sports-desk-and-shift-coverage-to-the-athletic",
    "sourceLink": "https://www.cnn.com/2023/07/10/media/new-york-times-sports-desk-closure-the-atlantic/index.html",
    "uid": "QafP3WPfx",
    "lbtype": "springboard",
    "interests": [
    "4xf2df3"
    ],
    "images": [
    {
    "link": "https://media.fotoscapes.com/imgs/J1/fO/AE/xI/O/J1fOAExIO-q6fylNXDtY.jpg",
    "width": 1024,
    "height": 576
    },
    {
    "link": "https://media.fotoscapes.com/imgs/J1/fO/AE/xI/O/J1fOAExIO-dof4BPmXSV.jpg",
    "width": 850,
    "height": 478
    }
    ],
    "previews": [
    {
    "link": "https://media.fotoscapes.com/imgs/J1/fO/AE/xI/O/J1fOAExIO-aYfbEenrS0.jpg",
    "width": 675,
    "height": 300
    },
    {
    "link": "https://media.fotoscapes.com/imgs/J1/fO/AE/xI/O/J1fOAExIO-v4fzxkPNsb.jpg",
    "width": 450,
    "height": 200
    },
    {
    "link": "https://media.fotoscapes.com/imgs/J1/fO/AE/xI/O/J1fOAExIO-BBf69dP7sD.jpg",
    "width": 360,
    "height": 160
    },
    {
    "link": "https://media.fotoscapes.com/imgs/J1/fO/AE/xI/O/J1fOAExIO-jxfnz1PlU9.jpg",
    "width": 270,
    "height": 120
    }
    ],
    "kb": {
    "startX": 0.5,
    "startY": 0.5,
    "startB": 0.4444,
    "endX": 0.5,
    "endY": 0.4159,
    "endB": 0.4444
    },
    "owner": "CNN",
    "brandLogo": "https://media.fotoscapes.com/imgs/J1/fk/1a/ID/J1fk1aID-6JfovXz3Hq.png",
    "brandLogoDark": "https://media.fotoscapes.com/imgs/J1/fk/1a/ID/J1fk1aID-g6f9aDo1fk.png",
    "numImages": 1,
    "boost": 0,
    "promote": false,
    "publishOn": "2023-07-10T16:16:13Z",
    "scheduledOn": "2023-07-10T16:41:41Z"
    },
    {
    "title": {
    "en": "Elon Musk jet-tracking account moves to Twitter rival Threads"
    },
    "summary": {
    "en": "One of Elon Musk's least-favorite Twitter users is moving to Meta's competing platform Threads."
    },
    "link": "https://fotoscapes.com/lookbook/NZfoaq6Cl/elon-musk-jet-tracking-account-moves-to-twitter-rival-threads",
    "sourceLink": "https://www.cnn.com/2023/07/10/tech/elon-musk-jet-twitter-threads/index.html",
    "uid": "NZfoaq6Cl",
    "lbtype": "springboard",
    "interests": [
    "4xf2df3"
    ],
    "images": [
    {
    "link": "https://media.fotoscapes.com/imgs/kv/fV/wE/yS/J/kvfVwEySJ-ANfZNrnpf0.jpg",
    "width": 1024,
    "height": 576
    },
    {
    "link": "https://media.fotoscapes.com/imgs/kv/fV/wE/yS/J/kvfVwEySJ-4xfo1qOnsl.jpg",
    "width": 850,
    "height": 478
    }
    ],
    "previews": [
    {
    "link": "https://media.fotoscapes.com/imgs/kv/fV/wE/yS/J/kvfVwEySJ-ZofexD3atg.jpg",
    "width": 675,
    "height": 300
    },
    {
    "link": "https://media.fotoscapes.com/imgs/kv/fV/wE/yS/J/kvfVwEySJ-jxfnz1lvc9.jpg",
    "width": 450,
    "height": 200
    },
    {
    "link": "https://media.fotoscapes.com/imgs/kv/fV/wE/yS/J/kvfVwEySJ-w6f9vV4Yt0.jpg",
    "width": 360,
    "height": 160
    },
    {
    "link": "https://media.fotoscapes.com/imgs/kv/fV/wE/yS/J/kvfVwEySJ-lAfd430qFe.jpg",
    "width": 270,
    "height": 120
    }
    ],
    "kb": {
    "startX": 0.5,
    "startY": 0.5,
    "startB": 0.4444,
    "endX": 0.5,
    "endY": 0.4159,
    "endB": 0.4444
    },
    "owner": "CNN",
    "brandLogo": "https://media.fotoscapes.com/imgs/J1/fk/1a/ID/J1fk1aID-6JfovXz3Hq.png",
    "brandLogoDark": "https://media.fotoscapes.com/imgs/J1/fk/1a/ID/J1fk1aID-g6f9aDo1fk.png",
    "numImages": 1,
    "boost": 0,
    "promote": false,
    "publishOn": "2023-07-10T16:20:03Z",
    "scheduledOn": "2023-07-10T16:41:35Z"
    },
    {
    "title": {
    "en": "Madonna shares health update: 'I'm on the road to recovery'"
    },
    "summary": {
    "en": "Madonna is rescheduling the North American leg of her world tour following her recent hospitalization."
    },
    "link": "https://fotoscapes.com/lookbook/Onfz29ZFY/madonna-shares-health-update-im-on-the-road-to-recovery",
    "sourceLink": "https://www.cnn.com/2023/07/10/entertainment/madonna-statement/index.html",
    "uid": "Onfz29ZFY",
    "lbtype": "springboard",
    "interests": [
    "4xf2df3"
    ],
    "images": [
    {
    "link": "https://media.fotoscapes.com/imgs/Xo/fJ/q2/lT/d/XofJq2lTd-3xfpxk6LSp.jpg",
    "width": 1024,
    "height": 576
    },
    {
    "link": "https://media.fotoscapes.com/imgs/Xo/fJ/q2/lT/d/XofJq2lTd-x6fdeYw7UY.jpg",
    "width": 850,
    "height": 478
    }
    ],
    "previews": [
    {
    "link": "https://media.fotoscapes.com/imgs/Xo/fJ/q2/lT/d/XofJq2lTd-BBf69dvmcD.jpg",
    "width": 675,
    "height": 300
    },
    {
    "link": "https://media.fotoscapes.com/imgs/Xo/fJ/q2/lT/d/XofJq2lTd-ZofexDraIg.jpg",
    "width": 450,
    "height": 200
    },
    {
    "link": "https://media.fotoscapes.com/imgs/Xo/fJ/q2/lT/d/XofJq2lTd-jxfnz1Xvh9.jpg",
    "width": 360,
    "height": 160
    },
    {
    "link": "https://media.fotoscapes.com/imgs/Xo/fJ/q2/lT/d/XofJq2lTd-w6f9vVbYt0.jpg",
    "width": 270,
    "height": 120
    }
    ],
    "kb": {
    "startX": 0.5,
    "startY": 0.5,
    "startB": 0.4444,
    "endX": 0.5,
    "endY": 0.4159,
    "endB": 0.4444
    },
    "owner": "CNN",
    "brandLogo": "https://media.fotoscapes.com/imgs/J1/fk/1a/ID/J1fk1aID-6JfovXz3Hq.png",
    "brandLogoDark": "https://media.fotoscapes.com/imgs/J1/fk/1a/ID/J1fk1aID-g6f9aDo1fk.png",
    "numImages": 1,
    "boost": 0,
    "promote": false,
    "publishOn": "2023-07-10T16:28:52Z",
    "scheduledOn": "2023-07-10T16:41:25Z"
    },
    {
    "title": {
    "en": "Homes sliding downhill as ground shifts above canyon in Rolling Hills Estates"
    },
    "summary": {
    "en": "Homes in Rolling Hills Estates continued to move Monday morning, more than a day after 12 houses were evacuated because of a major ground shift. The homes overlooking a canyon were red-tagged after firefighters and investigators found them visibly leaning Saturday afternoon because of massive movement on the hillside. The community is on the northern side of the Palos Verdes Peninsula, facing ..."
    },
    "link": "https://fotoscapes.com/lookbook/J1fvZEkCP/homes-sliding-downhill-as-ground-shifts-above-canyon-in-rolling-hills-estates",
    "sourceLink": "https://www.latimes.com/california/story/2023-07-10/homes-damaged-rolling-hills-estates-ground-movement?int_source=browser&int_medium=push_notification&int_campaign=breaking",
    "uid": "J1fvZEkCP",
    "lbtype": "article",
    "interests": [
    "4xf2df3",
    "jxfQZuD",
    "v4fBVtL"
    ],
    "images": [
    {
    "link": "https://media.fotoscapes.com/imgs/On/fg/QQ/Zc/X/OnfgQQZcX-4xfo1qobil.jpg",
    "width": 1280,
    "height": 854
    },
    {
    "link": "https://media.fotoscapes.com/imgs/On/fg/QQ/Zc/X/OnfgQQZcX-RqfdZ6dDfX.jpg",
    "width": 1024,
    "height": 683
    },
    {
    "link": "https://media.fotoscapes.com/imgs/On/fg/QQ/Zc/X/OnfgQQZcX-LRfVp3VYT6.jpg",
    "width": 850,
    "height": 567
    }
    ],
    "previews": [
    {
    "link": "https://media.fotoscapes.com/imgs/On/fg/QQ/Zc/X/OnfgQQZcX-v4fzxkzjTb.jpg",
    "width": 675,
    "height": 300
    },
    {
    "link": "https://media.fotoscapes.com/imgs/On/fg/QQ/Zc/X/OnfgQQZcX-Onfb1ebDSJ.jpg",
    "width": 450,
    "height": 200
    },
    {
    "link": "https://media.fotoscapes.com/imgs/On/fg/QQ/Zc/X/OnfgQQZcX-01fkozkXHA.jpg",
    "width": 360,
    "height": 160
    },
    {
    "link": "https://media.fotoscapes.com/imgs/On/fg/QQ/Zc/X/OnfgQQZcX-7mfNk1N1Fx.jpg",
    "width": 270,
    "height": 120
    }
    ],
    "kb": {
    "startX": 0.5,
    "startY": 0.5,
    "startB": 0.4444,
    "endX": 0.5,
    "endY": 0.3666,
    "endB": 0.4444
    },
    "owner": "Los Angeles Times",
    "brandLogo": "https://media.fotoscapes.com/imgs/Qa/fq/0n/fG/Qafq0nfG-YofYYpz2uo.png",
    "brandLogoDark": "https://media.fotoscapes.com/imgs/Qa/fq/0n/fG/Qafq0nfG-J1fWWlxltn.png",
    "numImages": 1,
    "boost": 0,
    "promote": false,
    "publishOn": "2023-07-10T12:08:00Z",
    "scheduledOn": "2023-07-10T16:38:19Z"
    },
    {
    "title": {
    "en": "Hollywood studios could face 2 strikes for the first time in 63 years. How did we get here?"
    },
    "summary": {
    "en": "LOS ANGELES — The year was 1960. An actor named Ronald Reagan was president of the Screen Actors Guild, which was at the time fired up about residuals over films licensed to or sold to TV. The result was a strike that lasted March 7 to April 18 and halted movies starring such luminaries as Elizabeth Taylor, Jack Lemmon and Marilyn Monroe. Actors joined the industry's writers, who had already ..."
    },
    "link": "https://fotoscapes.com/lookbook/YoflN9jiO/hollywood-studios-could-face-2-strikes-for-the-first-time-in-63-years-how-did-we-get-here",
    "sourceLink": "https://www.latimes.com/entertainment-arts/business/story/2023-07-10/la-et-ct-sag-aftra-strike-analysis",
    "uid": "YoflN9jiO",
    "lbtype": "article",
    "interests": [
    "4xf2df3",
    "v4fBVtL"
    ],
    "images": [
    {
    "link": "https://media.fotoscapes.com/imgs/v4/fr/nn/2f/P/v4frnn2fP-PYfx1O3GT7.jpg",
    "width": 1280,
    "height": 854
    },
    {
    "link": "https://media.fotoscapes.com/imgs/v4/fr/nn/2f/P/v4frnn2fP-Gvf9kwq1Sa.jpg",
    "width": 1024,
    "height": 683
    },
    {
    "link": "https://media.fotoscapes.com/imgs/v4/fr/nn/2f/P/v4frnn2fP-EvfaDZJqiO.jpg",
    "width": 850,
    "height": 567
    }
    ],
    "previews": [
    {
    "link": "https://media.fotoscapes.com/imgs/v4/fr/nn/2f/P/v4frnn2fP-J1fWY2N3In.jpg",
    "width": 675,
    "height": 300
    },
    {
    "link": "https://media.fotoscapes.com/imgs/v4/fr/nn/2f/P/v4frnn2fP-m7fBLVxEtR.jpg",
    "width": 450,
    "height": 200
    },
    {
    "link": "https://media.fotoscapes.com/imgs/v4/fr/nn/2f/P/v4frnn2fP-DkfDALVguR.jpg",
    "width": 360,
    "height": 160
    },
    {
    "link": "https://media.fotoscapes.com/imgs/v4/fr/nn/2f/P/v4frnn2fP-1DfWn9N1uj.jpg",
    "width": 270,
    "height": 120
    }
    ],
    "kb": {
    "startX": 0.5,
    "startY": 0.5,
    "startB": 0.4444,
    "endX": 0.5,
    "endY": 0.3666,
    "endB": 0.4444
    },
    "owner": "Los Angeles Times",
    "brandLogo": "https://media.fotoscapes.com/imgs/Qa/fq/0n/fG/Qafq0nfG-YofYYpz2uo.png",
    "brandLogoDark": "https://media.fotoscapes.com/imgs/Qa/fq/0n/fG/Qafq0nfG-J1fWWlxltn.png",
    "numImages": 1,
    "boost": 0,
    "promote": false,
    "publishOn": "2023-07-10T12:32:00Z",
    "scheduledOn": "2023-07-10T16:38:16Z"
    },
    {
    "title": {
    "en": "The best Prime Day deals 2023 live: iPads, Roombas, air fryers, and more"
    },
    "summary": {
    "en": "Take an early look at some of the best Prime Day deals available right now with our regularly updated live blog report, which runs through the whole event."
    },
    "link": "https://fotoscapes.com/lookbook/kvfxvwViq/the-best-prime-day-deals-2023-live-ipads-roombas-air-fryers-and-more",
    "sourceLink": "https://www.businessinsider.com/guides/deals/best-amazon-prime-day-deals-live-2023",
    "uid": "kvfxvwViq",
    "lbtype": "springboard",
    "interests": [
    "dofxEcL",
    "4xf2df3"
    ],
    "images": [
    {
    "link": "https://media.fotoscapes.com/imgs/97/fl/ZZ/rH/B/97flZZrHB-w6f9vV3nI0.jpg",
    "width": 1024,
    "height": 768
    },
    {
    "link": "https://media.fotoscapes.com/imgs/97/fl/ZZ/rH/B/97flZZrHB-lAfd43YySe.jpg",
    "width": 850,
    "height": 638
    }
    ],
    "previews": [
    {
    "link": "https://media.fotoscapes.com/imgs/97/fl/ZZ/rH/B/97flZZrHB-x6fdeY3XUY.jpg",
    "width": 675,
    "height": 300
    },
    {
    "link": "https://media.fotoscapes.com/imgs/97/fl/ZZ/rH/B/97flZZrHB-v4fzxkeVhb.jpg",
    "width": 450,
    "height": 200
    },
    {
    "link": "https://media.fotoscapes.com/imgs/97/fl/ZZ/rH/B/97flZZrHB-e1fl0qQGfe.jpg",
    "width": 360,
    "height": 160
    },
    {
    "link": "https://media.fotoscapes.com/imgs/97/fl/ZZ/rH/B/97flZZrHB-Onfb1eVOiJ.jpg",
    "width": 270,
    "height": 120
    }
    ],
    "kb": {
    "startX": 0.5,
    "startY": 0.5,
    "startB": 0.4444,
    "endX": 0.5,
    "endY": 0.337,
    "endB": 0.4444
    },
    "owner": "Business Insider",
    "brandLogo": "https://media.fotoscapes.com/imgs/w6/fE/wv/ir/w6fEwvir-q6fEPoBPfY.png",
    "brandLogoDark": "https://media.fotoscapes.com/imgs/w6/fE/wv/ir/w6fEwvir-ANfJ4eoYi0.png",
    "numImages": 1,
    "boost": 0,
    "promote": false,
    "publishOn": "2023-07-10T16:03:08Z",
    "scheduledOn": "2023-07-10T16:31:22Z"
    },
    {
    "title": {
    "en": "The best way to evaluate top and low performers during annual reviews, according to a Kellogg MBA professor"
    },
    "summary": {
    "en": "Performance reviews are incredibly important to businesses and organizations. George Georgiadis explains the best way to evaluate individuals."
    },
    "link": "https://fotoscapes.com/lookbook/EvfqbBrFD/the-best-way-to-evaluate-top-and-low-performers-during-annual-reviews-according-to-a-kellogg-mba-professor",
    "sourceLink": "https://www.businessinsider.com/how-to-performance-review-employees-kellogg-mba-professor-2023-7",
    "uid": "EvfqbBrFD",
    "lbtype": "springboard",
    "interests": [
    "dofxEcL",
    "4xf2df3"
    ],
    "images": [
    {
    "link": "https://media.fotoscapes.com/imgs/26/f1/vv/Af/w/26f1vvAfw-1DfWn9z4sj.jpg",
    "width": 1280,
    "height": 960
    },
    {
    "link": "https://media.fotoscapes.com/imgs/26/f1/vv/Af/w/26f1vvAfw-WJfX2p4RuL.jpg",
    "width": 1024,
    "height": 768
    },
    {
    "link": "https://media.fotoscapes.com/imgs/26/f1/vv/Af/w/26f1vvAfw-6JfY4BR7Iq.jpg",
    "width": 850,
    "height": 638
    }
    ],
    "previews": [
    {
    "link": "https://media.fotoscapes.com/imgs/26/f1/vv/Af/w/26f1vvAfw-dof4BPoEuV.jpg",
    "width": 675,
    "height": 300
    },
    {
    "link": "https://media.fotoscapes.com/imgs/26/f1/vv/Af/w/26f1vvAfw-RqfdZ6X2uX.jpg",
    "width": 450,
    "height": 200
    },
    {
    "link": "https://media.fotoscapes.com/imgs/26/f1/vv/Af/w/26f1vvAfw-LRfVp39Pt6.jpg",
    "width": 360,
    "height": 160
    },
    {
    "link": "https://media.fotoscapes.com/imgs/26/f1/vv/Af/w/26f1vvAfw-jxfnz1JZt9.jpg",
    "width": 270,
    "height": 120
    }
    ],
    "kb": {
    "startX": 0.5,
    "startY": 0.5,
    "startB": 0.4444,
    "endX": 0.5,
    "endY": 0.337,
    "endB": 0.4444
    },
    "owner": "Business Insider",
    "brandLogo": "https://media.fotoscapes.com/imgs/w6/fE/wv/ir/w6fEwvir-q6fEPoBPfY.png",
    "brandLogoDark": "https://media.fotoscapes.com/imgs/w6/fE/wv/ir/w6fEwvir-ANfJ4eoYi0.png",
    "numImages": 1,
    "boost": 0,
    "promote": false,
    "publishOn": "2023-07-10T16:05:38Z",
    "scheduledOn": "2023-07-10T16:31:21Z"
    },
    {
    "title": {
    "en": "Biden privately curses out staffers leading some to avoid solo meetings with him: report"
    },
    "summary": {
    "en": "The image of a fuming Biden contrasts with the president's more avuncular public persona of a grandpa who likes ice cream."
    },
    "link": "https://fotoscapes.com/lookbook/Gvf6dovT4/biden-privately-curses-out-staffers-leading-some-to-avoid-solo-meetings-with-him-report",
    "sourceLink": "https://www.businessinsider.com/biden-privately-curses-out-staffers-in-angry-moments-report-2023-7",
    "uid": "Gvf6dovT4",
    "lbtype": "springboard",
    "interests": [
    "dofxEcL",
    "4xf2df3",
    "lAfvyuy"
    ],
    "images": [
    {
    "link": "https://media.fotoscapes.com/imgs/aY/fz/NN/gH/1/aYfzNNgH1-oNf0jwlDsA.jpg",
    "width": 1280,
    "height": 960
    },
    {
    "link": "https://media.fotoscapes.com/imgs/aY/fz/NN/gH/1/aYfzNNgH1-Xofr9ozkTm.jpg",
    "width": 1024,
    "height": 768
    },
    {
    "link": "https://media.fotoscapes.com/imgs/aY/fz/NN/gH/1/aYfzNNgH1-PYfx1Okgh7.jpg",
    "width": 850,
    "height": 637
    }
    ],
    "previews": [
    {
    "link": "https://media.fotoscapes.com/imgs/aY/fz/NN/gH/1/aYfzNNgH1-ngfeZgLDuz.jpg",
    "width": 675,
    "height": 300
    },
    {
    "link": "https://media.fotoscapes.com/imgs/aY/fz/NN/gH/1/aYfzNNgH1-YofY32oPSo.jpg",
    "width": 450,
    "height": 200
    },
    {
    "link": "https://media.fotoscapes.com/imgs/aY/fz/NN/gH/1/aYfzNNgH1-J1fWY2orUn.jpg",
    "width": 360,
    "height": 160
    },
    {
    "link": "https://media.fotoscapes.com/imgs/aY/fz/NN/gH/1/aYfzNNgH1-m7fBLVjwSR.jpg",
    "width": 270,
    "height": 120
    }
    ],
    "kb": {
    "startX": 0.5,
    "startY": 0.5,
    "startB": 0.4444,
    "endX": 0.5,
    "endY": 0.3371,
    "endB": 0.4444
    },
    "owner": "Business Insider",
    "brandLogo": "https://media.fotoscapes.com/imgs/w6/fE/wv/ir/w6fEwvir-q6fEPoBPfY.png",
    "brandLogoDark": "https://media.fotoscapes.com/imgs/w6/fE/wv/ir/w6fEwvir-ANfJ4eoYi0.png",
    "numImages": 1,
    "boost": 0,
    "promote": false,
    "publishOn": "2023-07-10T16:12:45Z",
    "scheduledOn": "2023-07-10T16:31:19Z"
    },
    {
    "title": {
    "en": "Elizabeth Holmes' prison release date was just announced, and she'll serve nearly 2 years less than her 11-year sentence"
    },
    "summary": {
    "en": "Disgraced Theranos founder Elizabeth Holmes was sentenced to 11.25 years in prison, but will only serve roughly nine-and-a-half."
    },
    "link": "https://fotoscapes.com/lookbook/PYfy9BASo/elizabeth-holmes-prison-release-date-was-just-announced-and-shell-serve-nearly-2-years-less-than-her-11-year-sentence",
    "sourceLink": "https://www.businessinsider.com/elizabeth-holmes-out-of-prison-nearly-2-years-sooner-2023-7",
    "uid": "PYfy9BASo",
    "lbtype": "springboard",
    "interests": [
    "dofxEcL",
    "4xf2df3"
    ],
    "images": [
    {
    "link": "https://media.fotoscapes.com/imgs/lA/fy/11/Wf/m/lAfy11Wfm-e1fl0qjGUe.jpg",
    "width": 1280,
    "height": 960
    },
    {
    "link": "https://media.fotoscapes.com/imgs/lA/fy/11/Wf/m/lAfy11Wfm-Onfb1eaOFJ.jpg",
    "width": 1024,
    "height": 768
    },
    {
    "link": "https://media.fotoscapes.com/imgs/lA/fy/11/Wf/m/lAfy11Wfm-BBf69dOJSD.jpg",
    "width": 850,
    "height": 637
    }
    ],
    "previews": [
    {
    "link": "https://media.fotoscapes.com/imgs/lA/fy/11/Wf/m/lAfy11Wfm-bYfVBbXyIQ.jpg",
    "width": 675,
    "height": 300
    },
    {
    "link": "https://media.fotoscapes.com/imgs/lA/fy/11/Wf/m/lAfy11Wfm-p6fLwqadC0.jpg",
    "width": 450,
    "height": 200
    },
    {
    "link": "https://media.fotoscapes.com/imgs/lA/fy/11/Wf/m/lAfy11Wfm-QafyLBaLcN.jpg",
    "width": 360,
    "height": 160
    },
    {
    "link": "https://media.fotoscapes.com/imgs/lA/fy/11/Wf/m/lAfy11Wfm-zpf7raARIE.jpg",
    "width": 270,
    "height": 120
    }
    ],
    "kb": {
    "startX": 0.5,
    "startY": 0.5,
    "startB": 0.4444,
    "endX": 0.5,
    "endY": 0.3371,
    "endB": 0.4444
    },
    "owner": "Business Insider",
    "brandLogo": "https://media.fotoscapes.com/imgs/w6/fE/wv/ir/w6fEwvir-q6fEPoBPfY.png",
    "brandLogoDark": "https://media.fotoscapes.com/imgs/w6/fE/wv/ir/w6fEwvir-ANfJ4eoYi0.png",
    "numImages": 1,
    "boost": 0,
    "promote": false,
    "publishOn": "2023-07-10T16:18:58Z",
    "scheduledOn": "2023-07-10T16:31:18Z"
    },
    {
    "title": {
    "en": "Who will win the Ashes 2023? England's Bairstow dilemma and Australia's Warner headache"
    },
    "summary": {
    "en": "It's all to play for in the Ashes after England's three-wicket win over Australia at Headingley. What are the main issues facing the two sides and who will get the job done?"
    },
    "link": "https://fotoscapes.com/lookbook/Onfz2QZHY/who-will-win-the-ashes-2023-englands-bairstow-dilemma-and-australias-warner-headache",
    "sourceLink": "https://www.sportingnews.com/us/cricket/news/who-will-win-ashes-2023-england-australia/eiud2yk8ucvtfcoikktiherr",
    "uid": "Onfz2QZHY",
    "lbtype": "springboard",
    "interests": [
    "01f7Pco",
    "4xf2df3"
    ],
    "images": [
    {
    "link": "https://media.fotoscapes.com/imgs/WJ/fL/66/Bt/B/WJfL66BtB-p6fLwqemI0.jpg",
    "width": 1280,
    "height": 720
    },
    {
    "link": "https://media.fotoscapes.com/imgs/WJ/fL/66/Bt/B/WJfL66BtB-zpf7ra46hE.jpg",
    "width": 1024,
    "height": 576
    },
    {
    "link": "https://media.fotoscapes.com/imgs/WJ/fL/66/Bt/B/WJfL66BtB-oNf0jwWpHA.jpg",
    "width": 850,
    "height": 478
    }
    ],
    "previews": [
    {
    "link": "https://media.fotoscapes.com/imgs/WJ/fL/66/Bt/B/WJfL66BtB-m7fBLVALcR.jpg",
    "width": 675,
    "height": 300
    },
    {
    "link": "https://media.fotoscapes.com/imgs/WJ/fL/66/Bt/B/WJfL66BtB-DkfDALjwSR.jpg",
    "width": 450,
    "height": 200
    },
    {
    "link": "https://media.fotoscapes.com/imgs/WJ/fL/66/Bt/B/WJfL66BtB-1DfWn9ObCj.jpg",
    "width": 360,
    "height": 160
    },
    {
    "link": "https://media.fotoscapes.com/imgs/WJ/fL/66/Bt/B/WJfL66BtB-6JfY4BZXiq.jpg",
    "width": 270,
    "height": 120
    }
    ],
    "kb": {
    "startX": 0.5,
    "startY": 0.5,
    "startB": 0.4444,
    "endX": 0.5,
    "endY": 0.416,
    "endB": 0.4444
    },
    "owner": "Sporting News",
    "brandLogo": "https://media.fotoscapes.com/imgs/VP/fj/Y3/S7/VPfjY3S7-x6fBEdXbCY.png",
    "brandLogoDark": "https://media.fotoscapes.com/imgs/VP/fj/Y3/S7/VPfjY3S7-e1f1vlRBfe.png",
    "numImages": 1,
    "boost": 0,
    "promote": false,
    "publishOn": "2023-07-10T16:28:25Z",
    "scheduledOn": "2023-07-10T16:30:08Z"
    },
    {
    "title": {
    "en": "Extreme heat will smother the South from Arizona to Florida"
    },
    "summary": {
    "en": "Parts of Arizona, Texas and South Florida are forecast to see dangerous temperatures again after a weekend of extreme heat. Forecasters warn against spending time outdoors."
    },
    "link": "https://fotoscapes.com/lookbook/oNf4x6Zfw/extreme-heat-will-smother-the-south-from-arizona-to-florida",
    "sourceLink": "https://www.npr.org/2023/07/10/1186726730/extreme-heat-southwest-texas-south-florida",
    "uid": "oNf4x6Zfw",
    "lbtype": "springboard",
    "interests": [
    "4xf2df3"
    ],
    "images": [
    {
    "link": "https://media.fotoscapes.com/imgs/7m/fd/Rk/0I/d/7mfdRk0Id-oNf0jg41FA.jpg",
    "width": 600,
    "height": 337
    }
    ],
    "previews": [
    {
    "link": "https://media.fotoscapes.com/imgs/7m/fd/Rk/0I/d/7mfdRk0Id-kvfrD3xOcO.jpg",
    "width": 450,
    "height": 200
    },
    {
    "link": "https://media.fotoscapes.com/imgs/7m/fd/Rk/0I/d/7mfdRk0Id-YofY3xlwTo.jpg",
    "width": 360,
    "height": 160
    },
    {
    "link": "https://media.fotoscapes.com/imgs/7m/fd/Rk/0I/d/7mfdRk0Id-m7fBLdaJHR.jpg",
    "width": 270,
    "height": 120
    }
    ],
    "kb": {
    "startX": 0.5,
    "startY": 0.5,
    "startB": 0.4444,
    "endX": 0.5,
    "endY": 0.4165,
    "endB": 0.4444
    },
    "owner": "National Public Radio",
    "brandLogo": "https://media.fotoscapes.com/imgs/do/f2/Vu/p/dof2Vup-p6fZELB6h0.png",
    "brandLogoDark": "https://media.fotoscapes.com/imgs/do/f2/Vu/p/dof2Vup-PYfNdzXvS7.png",
    "numImages": 1,
    "boost": 0,
    "promote": false,
    "publishOn": "2023-07-10T15:58:47Z",
    "scheduledOn": "2023-07-10T16:26:47Z"
    },
    {
    "title": {
    "en": "BBC suspends host accused of paying a teen $45K for sexually explicit photos"
    },
    "summary": {
    "en": "The alleged victim's mother says for three years, a BBC star funded her teen's drug habit in exchange for explicit photos. It's the latest scandal to rock Britain's beleaguered public broadcaster."
    },
    "link": "https://fotoscapes.com/lookbook/7mfo7gRfR/bbc-suspends-host-accused-of-paying-a-teen-45k-for-sexually-explicit-photos",
    "sourceLink": "https://www.npr.org/2023/07/10/1186749796/bbc-suspends-host-accused-of-paying-a-teen-45k-for-sexually-explicit-photos",
    "uid": "7mfo7gRfR",
    "lbtype": "springboard",
    "interests": [
    "4xf2df3"
    ],
    "images": [
    {
    "link": "https://media.fotoscapes.com/imgs/w6/fL/bv/4t/g/w6fLbv4tg-w6f9vgBAC0.jpg",
    "width": 600,
    "height": 337
    }
    ],
    "previews": [
    {
    "link": "https://media.fotoscapes.com/imgs/w6/fL/bv/4t/g/w6fLbv4tg-26fEerkpIy.jpg",
    "width": 450,
    "height": 200
    },
    {
    "link": "https://media.fotoscapes.com/imgs/w6/fL/bv/4t/g/w6fLbv4tg-97fW6rGZCL.jpg",
    "width": 360,
    "height": 160
    },
    {
    "link": "https://media.fotoscapes.com/imgs/w6/fL/bv/4t/g/w6fLbv4tg-3xfpxravhp.jpg",
    "width": 270,
    "height": 120
    }
    ],
    "kb": {
    "startX": 0.5,
    "startY": 0.5,
    "startB": 0.4444,
    "endX": 0.5,
    "endY": 0.4165,
    "endB": 0.4444
    },
    "owner": "National Public Radio",
    "brandLogo": "https://media.fotoscapes.com/imgs/do/f2/Vu/p/dof2Vup-p6fZELB6h0.png",
    "brandLogoDark": "https://media.fotoscapes.com/imgs/do/f2/Vu/p/dof2Vup-PYfNdzXvS7.png",
    "numImages": 1,
    "boost": 0,
    "promote": false,
    "publishOn": "2023-07-10T16:15:05Z",
    "scheduledOn": "2023-07-10T16:26:21Z"
    },
    {
    "title": {
    "en": "WATCH LIVE: Congressional Women's Softball Game 2023"
    },
    "summary": {
    "en": "The 15th annual Congressional Women's Softball Game will take place on Wednesday, July 12. The annual event gives a chance for a bipartisan group of women members of Congress to take on women who are members of the D.C. press corps."
    },
    "link": "https://fotoscapes.com/lookbook/7mfo7k3IR/watch-live-congressional-womens-softball-game-2023",
    "sourceLink": "https://www.pbs.org/newshour/nation/watch-live-congressional-womens-softball-game-2023",
    "uid": "7mfo7k3IR",
    "lbtype": "springboard",
    "interests": [
    "4xf2df3"
    ],
    "images": [
    {
    "link": "https://media.fotoscapes.com/imgs/w6/fL/bo/6H/g/w6fLbo6Hg-ngfeZvPJHz.jpg",
    "width": 1024,
    "height": 576
    },
    {
    "link": "https://media.fotoscapes.com/imgs/w6/fL/bo/6H/g/w6fLbo6Hg-J1fWY4mySn.jpg",
    "width": 850,
    "height": 478
    }
    ],
    "previews": [
    {
    "link": "https://media.fotoscapes.com/imgs/w6/fL/bo/6H/g/w6fLbo6Hg-m7fBLdWjFR.jpg",
    "width": 675,
    "height": 300
    },
    {
    "link": "https://media.fotoscapes.com/imgs/w6/fL/bo/6H/g/w6fLbo6Hg-DkfDAGmVHR.jpg",
    "width": 450,
    "height": 200
    },
    {
    "link": "https://media.fotoscapes.com/imgs/w6/fL/bo/6H/g/w6fLbo6Hg-1DfWnGZWcj.jpg",
    "width": 360,
    "height": 160
    },
    {
    "link": "https://media.fotoscapes.com/imgs/w6/fL/bo/6H/g/w6fLbo6Hg-WJfX2knWfL.jpg",
    "width": 270,
    "height": 120
    }
    ],
    "kb": {
    "startX": 0.5,
    "startY": 0.5,
    "startB": 0.4444,
    "endX": 0.5,
    "endY": 0.416,
    "endB": 0.4444
    },
    "owner": "PBS",
    "brandLogo": "https://media.fotoscapes.com/imgs/3x/fz/BN/cL/3xfzBNcL-Qaf0wooQcN.png",
    "brandLogoDark": "https://media.fotoscapes.com/imgs/3x/fz/BN/cL/3xfzBNcL-EvfLnJaLHO.png",
    "numImages": 1,
    "boost": 0,
    "promote": false,
    "publishOn": "2023-07-10T16:03:20Z",
    "scheduledOn": "2023-07-10T16:22:20Z"
    },
    {
    "title": {
    "en": "Officials say one victim was killed prior to Fourth of July mass shooting in Philadelphia"
    },
    "summary": {
    "en": "The Philadelphia district attorney says one of five people believed to have been killed in the city July 3 appears to have been fatally shot almost two full days before the mass shooting reported last week."
    },
    "link": "https://fotoscapes.com/lookbook/x6fR4oyie/officials-say-one-victim-was-killed-prior-to-fourth-of-july-mass-shooting-in-philadelphia",
    "sourceLink": "https://www.pbs.org/newshour/nation/officials-say-one-victim-was-killed-2-days-before-fourth-of-july-mass-shooting-in-philadelphia",
    "uid": "x6fR4oyie",
    "lbtype": "springboard",
    "interests": [
    "4xf2df3"
    ],
    "images": [
    {
    "link": "https://media.fotoscapes.com/imgs/4x/fD/O9/Dh/a/4xfDO9Dha-VPfDaWmBty.jpg",
    "width": 1024,
    "height": 683
    },
    {
    "link": "https://media.fotoscapes.com/imgs/4x/fD/O9/Dh/a/4xfDO9Dha-bYfVBlNDiQ.jpg",
    "width": 850,
    "height": 567
    }
    ],
    "previews": [
    {
    "link": "https://media.fotoscapes.com/imgs/4x/fD/O9/Dh/a/4xfDO9Dha-p6fLwEWXI0.jpg",
    "width": 675,
    "height": 300
    },
    {
    "link": "https://media.fotoscapes.com/imgs/4x/fD/O9/Dh/a/4xfDO9Dha-QafyLO74TN.jpg",
    "width": 450,
    "height": 200
    },
    {
    "link": "https://media.fotoscapes.com/imgs/4x/fD/O9/Dh/a/4xfDO9Dha-zpf7rEb9hE.jpg",
    "width": 360,
    "height": 160
    },
    {
    "link": "https://media.fotoscapes.com/imgs/4x/fD/O9/Dh/a/4xfDO9Dha-r6fjaEvliV.jpg",
    "width": 270,
    "height": 120
    }
    ],
    "kb": {
    "startX": 0.5,
    "startY": 0.5,
    "startB": 0.4444,
    "endX": 0.5,
    "endY": 0.3665,
    "endB": 0.4444
    },
    "owner": "PBS",
    "brandLogo": "https://media.fotoscapes.com/imgs/3x/fz/BN/cL/3xfzBNcL-Qaf0wooQcN.png",
    "brandLogoDark": "https://media.fotoscapes.com/imgs/3x/fz/BN/cL/3xfzBNcL-EvfLnJaLHO.png",
    "numImages": 1,
    "boost": 0,
    "promote": false,
    "publishOn": "2023-07-10T16:13:25Z",
    "scheduledOn": "2023-07-10T16:22:09Z"
    }
    ],
    "gen": "2023-07-10T17:14:08Z",
    "ttl": "2023-07-10T17:44:08Z"
    }`)

    export default news; 