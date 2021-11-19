import s from './Home.module.css';
const Home = () => {
    return <div className={s.ProductWrap}>
        <div className = {s.slider}><h2>Home Page</h2>
            <div className={'cardsWrap'}>
                <div className={'card'}/>
            </div>
        </div>
    </div>
}

export default Home;
