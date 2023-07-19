import { Fragment } from "react";
import BlockFotoscape from "./Blocks/BlockFotoscape";
import BlockOutbrain from "./Blocks/BlockOutbrain";
import BlockRevealMemes from "./Blocks/BlockRevealMemes";
import BlockAd from "./Blocks/BlockAd";
import {
  BlockFotoscapeConfig,
  ValidBlockConfig,
  BlockOutbrainConfig,
  BlockRevealMemesConfig,
  BlockAdConfig,
} from "../definition";

const Section: React.FC<{
  template: ValidBlockConfig[]; 
}> = ({template}) => {
  return (
    <Fragment>
      {template.map((item) => {
        switch (item.blockType) {
          case "fotoscape_block":
            return <BlockFotoscape key={Math.random()} configs={item as BlockFotoscapeConfig} />;
          case "outbrain_block":
            return <BlockOutbrain key={Math.random()} configs={item as BlockOutbrainConfig} />;
          case "memes_widget_block":
            return (
              <BlockRevealMemes key={Math.random()} configs={item as BlockRevealMemesConfig} />
            );
          case "ad_unit":
            return <BlockAd key={Math.random()} configs={item as BlockAdConfig} />;
          default:
            return <div key={Math.random()}>Block Type not recognized</div>;
        }
      })}
    </Fragment>
  );
};

export default Section;
