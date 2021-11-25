import s from './Card5.module.css'
import img5 from './img/image 11.png'

const Card5 = () => {
    return <>
        <div className={s.card5}>
            <img src={img5} alt={'5'}/>
        </div>
    </>
}

export default Card5;