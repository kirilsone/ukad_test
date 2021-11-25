import img4 from './img/image4.png'
import t from '../StyleTextCards.module.css'

const Card4 = () => {
    return <>
        <div className={t.imgW}>
            <img src={img4} alt={'4'}/>
        </div>
        <div className={t.textW}>
            <h6>Hardost</h6>
            <p>Falbygdens Rekommenderar LEtivaz AOP opast hardost</p>
        </div>



    </>
}

export default Card4;