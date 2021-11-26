import img from './img/image 4.png'
import t from '../StyleTextCards.module.css'

const Card2 = () => {
    return <>
        <div className={t.imgW}>
            <img src={img} alt={'4'}/>
        </div>
        <div className={t.textW}>
            <h6>Hardost</h6>
            <p>Falbygdens Rekommenderar LEtivaz AOP opast hardost</p>
        </div>
    </>
}

export default Card2;