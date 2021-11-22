import s from './Products.module.css';
import CardsSection from "./CardsSection/CardsSection";

const Products = () => {
    return <div className={s.ProductWrap}>
        <h2>Product Page</h2>
        <CardsSection/>
    </div>
}

export default Products;