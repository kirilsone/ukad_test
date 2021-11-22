import s from './Home.module.css';
const Home = () => {
    return <div className={s.HomeWrap}>
        <div className={s.slider}><h2>Home Page</h2>
            <div className={s.cardsWrap}>
                <button className={s.arrow}>arrow</button>
                <div className={s.card}/>
            </div>
        </div>
    </div>
}

export default Home;
