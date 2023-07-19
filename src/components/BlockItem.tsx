import { FotoscapeItem } from "../definition";
import styles from "./BlockItem.module.css"

const BlockItem: React.FC<{
    data: FotoscapeItem;  
}> = ({data})=>{

    return (
        <a href={data.url}>
        <div className={styles['block-item']}>
            <div className={styles['block-item__body']}>
                <div className={styles['block-item__media']}>
                    <img className={styles['block-item__thumbnail']} alt='thumnail' src={data.imageUrl}/>
                </div>
                <h1 className={styles['block-item__title']}>{data.title}</h1>
            </div>
        </div>
        </a>
    )
}
export default BlockItem; 