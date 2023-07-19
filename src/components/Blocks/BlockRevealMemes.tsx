import { BlockRevealMemesConfig } from "../../definition";
const BlockRevealMemes: React.FC<{
  configs: BlockRevealMemesConfig;
}> = (props) => {
  return <div>{props.configs.blockType}</div>;
};

export default BlockRevealMemes;
