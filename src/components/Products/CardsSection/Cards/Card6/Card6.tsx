import t from '../StyleTextCards.module.css'
import img6 from './img/image 10.png'

const Card6 = () => {
    return <>
        <div className={t.imgW}>
            <img src={img6} alt={'6'}/>
        </div>
        <div className={t.textW}>
            <h6>Blamogel</h6>
            <p>Falbygdens Rekommenderar Tomme Chistera hardost</p>
        </div>
    </>
}

export default Card6;