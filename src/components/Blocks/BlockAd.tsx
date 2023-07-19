import { BlockAdConfig } from "../../definition"

const BlockAd: React.FC<{
    configs: BlockAdConfig
}> = (props)=>{
    return <div>{props.configs.blockType} component</div>

}

export default BlockAd