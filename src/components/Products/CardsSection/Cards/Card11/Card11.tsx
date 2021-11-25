import t from '../StyleTextCards.module.css'
import img from './img/image 5.png'

const Card11 = () => {
    return <>
        <div className={t.card}>
            <img src={img} alt={'11'}/>
        </div>
        <div className={t.textW}>
            <h6>Hardost</h6>
            <p>Falbygdens Rekommenderar Whiskyadel blamogelost</p>
        </div>
    </>
}

export default Card11;