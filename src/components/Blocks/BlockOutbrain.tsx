import { BlockOutbrainConfig } from "../../definition";

const BlockOutbrain: React.FC<{
    configs: BlockOutbrainConfig
}> = (props)=>{
    return <div>{props.configs.blockType}</div>
}
export default BlockOutbrain; 