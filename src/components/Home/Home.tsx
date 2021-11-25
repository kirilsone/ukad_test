import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./styles.css";
import Card4 from "../Products/CardsSection/Cards/Card4/Card4";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
];

const Home = () => {
    return<>
        <div className="App">
            <Carousel breakPoints={breakPoints} isRTL={false}>
                <Item>One</Item>
                <Item>Two</Item>
                <Item>Three</Item>
                <Item><Card4/></Item>
                <Item>Five</Item>
                <Item>Six</Item>
                <Item>Seven</Item>
                <Item>Eight</Item>
            </Carousel>
        </div>
    </>
}



export default Home;
