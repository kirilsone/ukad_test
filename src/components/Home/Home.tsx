import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./styles.css";
import s from "./Home.module.css";
import Card1 from "../Products/CardsSection/Cards/Card1/Card1";
import Card2 from "../Products/CardsSection/Cards/Card2/Card2";
import Card4 from "../Products/CardsSection/Cards/Card4/Card4";
import Card5 from "../Products/CardsSection/Cards/Card5/Card5";
import Card6 from "../Products/CardsSection/Cards/Card6/Card6";
import Card7 from "../Products/CardsSection/Cards/Card7/Card7";
import Card8 from "../Products/CardsSection/Cards/Card8/Card8";
import Card9 from "../Products/CardsSection/Cards/Card9/Card9";
import Card10 from "../Products/CardsSection/Cards/Card10/Card10";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
];

const Home = () => {
    return<>
        <div className="App">
            <div className={s.h2W}><h2>Home Page</h2>
            </div>
            <Carousel breakPoints={breakPoints} isRTL={false}>
                <Item><Card1/></Item>
                <Item><Card2/></Item>
                <Item><Card4/></Item>
                <Item><Card5/></Item>
                <Item><Card6/></Item>
                <Item><Card7/></Item>
                <Item><Card8/></Item>
                <Item><Card9/></Item>
                <Item><Card10/></Item>
            </Carousel>
        </div>
    </>
}



export default Home;
