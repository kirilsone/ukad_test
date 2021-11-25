import t from '../StyleTextCards.module.css'
import img7 from './img/image 9.png'

const Card7 = () => {
    return <>
        <div className={t.card7}>
            <img src={img7} alt={'7'}/>
        </div>
        <div className={t.textW}>
            <h6>Blamogel</h6>
            <p>Kvibille Hallands Hav Lagrad 45% blamogelost</p>
        </div>
    </>
}

export default Card7;