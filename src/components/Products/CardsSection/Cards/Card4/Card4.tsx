import s from './Card4.module.css'
import img4 from './img/image4.png'

const Card4 = () => {
    return <>
        <div className={s.card4}>
            <img src={img4} alt={'4'}/>
        </div>
    </>
}

export default Card4;