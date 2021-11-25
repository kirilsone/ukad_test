import t from '../StyleTextCards.module.css'
import img from './img/image 5.png'

const Card11 = () => {
    return <>
        <div className={t.card}>
            <img src={img} alt={'11'}/>
        </div>
    </>
}

export default Card11;