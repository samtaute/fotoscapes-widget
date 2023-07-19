import { Fragment } from "react";
import { BlockFotoscapeConfig, FotoscapeItem } from "../../definition";
import BlockItem from "../BlockItem";
// import news from "../../dummy-data/softbox-payload";
import { useContext } from "react";
import SoftboxContext from "../../store/softbox-context";

// const contentList = news.items;

const BlockFotoscape: React.FC<{ configs: BlockFotoscapeConfig }> = (props) => {
  const ctx = useContext(SoftboxContext);
  const count = props.configs.settings.count;
  const category = props.configs.settings.category!; 
  //   const category = props.configs.settings.category;
  let contentItems: FotoscapeItem[] = [];
  if (ctx.content[category]) {
    contentItems = ctx.content[category].slice(0, count); 
    console.log(contentItems)
  }

  return (
    <Fragment>
      {contentItems.map((item: FotoscapeItem) => {
        return <BlockItem key={Math.random()} data={item}></BlockItem>;
      })}
    </Fragment>
  );
};

export default BlockFotoscape;
