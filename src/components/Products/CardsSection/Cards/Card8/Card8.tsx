import t from '../StyleTextCards.module.css'
import img from './img/image 8.png'

const Card8 = () => {
    return <>
        <div className={t.card}>
            <img src={img} alt={'8'}/>
        </div>
        <div className={t.textW}>
            <h6>Hardost</h6>
            <p>Falbygdens Rekommenderar Raclette hardost</p>
        </div>
    </>
}

export default Card8;