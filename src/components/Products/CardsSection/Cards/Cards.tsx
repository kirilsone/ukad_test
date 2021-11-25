import s from './Cards.module.css';
import Card4 from "./Card4/Card4";
import Card5 from "./Card5/Card5";
import Card8 from "./Card8/Card8";
import Card10 from "./Card10/Card10";
import Card6 from "./Card6/Card6";
import Card7 from "./Card7/Card7";
import Card9 from "./Card9/Card9";
import Card11 from "./Card11/Card11";

const Cards = () => {
    return <>
        <div className={s.cards__item}>
            <Card4/>
        </div>
        <div className={s.cards__item}>
            <Card5/>
        </div>
        <div className={s.cards__item}>
            <Card6/>
        </div>
        <div className={s.cards__item}>
            <Card7 />
        </div>
        <div className={s.cards__item}>
            <Card8/>
        </div>
        <div className={s.cards__item}>
            <Card9 />
        </div>
        <div className={s.cards__item}>
            <Card10/>
        </div>
        <div className={s.cards__item}>
            <Card11 />
        </div>
    </>
}

export default Cards;