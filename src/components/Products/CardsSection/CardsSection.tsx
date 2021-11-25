import s from './CardsSection.module.css';
import Cards from "./Cards/Cards";


const CardsSection = () => {
    return <>
        <div className={s.cards}>
            <Cards/>
        </div>
    </>
}

export default CardsSection;