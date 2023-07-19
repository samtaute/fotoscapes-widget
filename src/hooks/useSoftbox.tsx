import { useState, useCallback } from "react";
import { FotoscapeItem } from "../definition";

function useSoftbox() {
  const [contentLibrary, setContentLibrary] = useState({});

  const sendRequest = useCallback(async (category: string) => {
    const baseUrl =
      "https://fotoscapes.com/wp/v1/daily?ckey=fb529d256155b9c6&sched=";
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
          imageUrl: item.previews[0],
          description: item.summary.en,
        };
        itemList.push(cleanItem);
      }
      setContentLibrary((currLibrary: any) => {
        let copy = {
          ...currLibrary,
        };
        copy[category] = itemList;
        return copy;
      });
      return itemList; 
    } catch (err) {
      console.log((err as Error).message);
    }
  }, []);
  return {
    sendRequest,
    contentLibrary,
  };
}

export default useSoftbox;
