import Section from "./components/Section";
import {useContext, useEffect } from "react";
import SoftboxContext from "./store/softbox-context";
import { ValidBlockConfig, PageConfig  } from "./definition";
import { layout } from "./dummy-data/layout";
import { page } from "./dummy-data/page-config";

const getRandomInteger = (maxNumber: number)=>{
  return Math.floor(Math.random() * (maxNumber + 1)); 
}
const generateTemplate = (layout: ValidBlockConfig[], page:PageConfig) =>{
  let template: ValidBlockConfig[] = []; 

  for (let item of layout){ 
    let random = getRandomInteger(page.categories.length-1)
    let copy = {...item}; 
    if(copy.blockType === 'fotoscape_block'){
      copy.settings.category=page.categories[random]
    }
    template.push(copy); 
  }
  return template; 
}


function App() {
  console.log("app");
  const ctx = useContext(SoftboxContext);
  const template: ValidBlockConfig[] = generateTemplate(layout, page)


  useEffect(() => {
    for(let category of page.categories){
      ctx.fetchCategory(category); 
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Section template={template} />;
}

export default App;
