import t from '../StyleTextCards.module.css'
import img from './img/image10.png'

const Card10 = () => {
    return <>
        <div className={t.card}>
            <img src={img} alt={'8'}/>
        </div>
        <div className={t.textW}>
            <h6>Hardost</h6>
            <p>Falbygdens Rekommenderar Coeur de Basque hardost</p>
        </div>
    </>
}

export default Card10;