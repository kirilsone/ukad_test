import s from './Cards.module.css';
import Card4 from "./Card4/Card4";
import Card8 from "./Card8/Card8";
import Card10 from "./Card10/Card10";

const Cards = () => {
    return <>
        <div className={s.cards__item}>
            <Card4/>
        </div>
        <div className={s.cards__item}>
        </div>
        <div className={s.cards__item}>
        </div>
        <div className={s.cards__item}>
        </div>
        <div className={s.cards__item}>
            <Card8/>
        </div>
        <div className={s.cards__item}>
        </div>
        <div className={s.cards__item}>
            <Card10/>
        </div>
        <div className={s.cards__item}>
        </div>
    </>
}

export default Cards;