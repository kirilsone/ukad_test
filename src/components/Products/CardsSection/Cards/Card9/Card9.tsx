import s from './Card9.module.css'
import img9 from './img/image 7.png'

const Card9 = () => {
    return <>
        <div className={s.card9}>
            <img src={img9} alt={'9'}/>
        </div>
    </>
}

export default Card9;