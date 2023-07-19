import React, { ReactNode } from "react";
import { ItemList, FotoscapeItem } from "../definition";
import { useState, useCallback } from "react";

type SoftboxContextObj = {
  fetchCategory: (category: string) => void;
  content: {
    [prop: string]: ItemList;
  };
};
export const SoftboxContext = React.createContext<SoftboxContextObj>({
  fetchCategory(category: string) {},
  content: {},
});

export const SoftboxContextProvider: React.FC<{
  children: ReactNode;
}> = (props) => {
  const [content, setContent] = useState({} as any);

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
      const items = data.items;

      for (let item of items) {
        let cleanItem: FotoscapeItem;
        cleanItem = {
          title: item.title.en,
          url: item.link,
          imageUrl: item.previews[3] ?  item.previews[3]['link']: item.previews[0]['link'],
          description: item.summary.en,
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
    fetchCategory: fetchCategory,
  };
  return (
    <SoftboxContext.Provider value={contextValue}>
      {props.children}
    </SoftboxContext.Provider>
  );
};

export default SoftboxContext;
