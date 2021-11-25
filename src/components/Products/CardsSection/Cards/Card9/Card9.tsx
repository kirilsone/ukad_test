import t from '../StyleTextCards.module.css'
import img9 from './img/image 7.png'

const Card9 = () => {
    return <>
        <div className={t.card}>
            <img src={img9} alt={'9'}/>
        </div>
        <div className={t.textW}>
            <h6>Hardost</h6>
            <p>Falbygdens Rekommenderar Tryffelost opast 32%</p>
        </div>
    </>
}

export default Card9;