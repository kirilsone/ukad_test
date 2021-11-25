import t from '../StyleTextCards.module.css'
import img5 from './img/image 11.png'

const Card5 = () => {
    return <>
        <div className={t.imgW}>
            <img src={img5} alt={'5'}/>
        </div>
        <div className={t.textW}>
            <h6>Blamogel</h6>
            <p>Falbygdens Rekommenderar Roquefort Papillon opas bla.. </p>
        </div>
    </>
}

export default Card5;