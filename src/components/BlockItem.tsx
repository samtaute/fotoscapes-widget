import { FotoscapeItem } from "../definition";
import styles from "./BlockItem.module.css"
import { useContext } from "react";
import SoftboxContext from "../store/softbox-context";


const BlockItem: React.FC<{
    data: FotoscapeItem;  
}> = ({data})=>{
    const ctx = useContext(SoftboxContext)
    const clickHandler = () =>{
        ctx.click(data.uid, data.interests); 
    }
    return (
        <a href={data.url} onClick={clickHandler}>
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