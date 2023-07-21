import React, { ReactNode } from "react";
import { ItemList, FotoscapeItem } from "../definition";
import { useState, useCallback } from "react";
import NewPersonalize from "../personalize";

const instance = NewPersonalize(); 

type SoftboxContextObj = {
  fetchCategory: (category: string) => void;
  defaultInterests: any; 
  click: (uid: string, interests: string[])=>void; 
  content: {
    [prop: string]: ItemList;
  };
};
export const SoftboxContext = React.createContext<SoftboxContextObj>({
  fetchCategory(category: string) {},
  defaultInterests: {},
  content: {},
  click: (uid: string, interests: string[])=>{}
});

export const SoftboxContextProvider: React.FC<{
  children: ReactNode;
}> = (props) => {
  const [content, setContent] = useState({} as any);
  const [interests, setInterests] = useState({} as any)

  const onClick = (uid: string, interests: string[])=>{
    instance.click(uid, interests)
  }

  const fetchCategory = useCallback(async (category: string) => {
    const baseUrl =
      "https://fotoscapes.com/wp/v1/daily?ckey=fb529d256155b9c6&previewAspect=1:1&sched=";
    let itemList: FotoscapeItem[] = [];
    const requestUrl = baseUrl + category;
    try {
      const response = await fetch(requestUrl);

      if (!response.ok) {
        throw new Error(`Request failed: ${requestUrl}`);
      }
      const data = await response.json();
      setInterests(data.interests); 
      console.log(data.interests)

      const items = data.items;

      const settings = {
        count: items.length
      }
      const orderedItems = instance.choose(items, settings, data.interests)


      for (let item of orderedItems) {
        let cleanItem: FotoscapeItem;
        cleanItem = {
          title: item.title.en,
          url: item.link,
          imageUrl: item.previews[3] ?  item.previews[3]['link']: item.previews[0]['link'],
          description: item.summary.en,
          uid: item.uid,
          interests: item.interests,
        };
        itemList.push(cleanItem);
      }
      setContent((currLibrary: any) => {
        let copy = {
          ...currLibrary,
        };
        copy[category] = itemList;
        return copy;
      });
    } catch (err) {
      console.log((err as Error).message);
    }
  },[]);

  const contextValue = {
    content: content,
    defaultInterests: interests,
    fetchCategory: fetchCategory,
    click: onClick,
  };
  return (
    <SoftboxContext.Provider value={contextValue}>
      {props.children}
    </SoftboxContext.Provider>
  );
};

export default SoftboxContext;
