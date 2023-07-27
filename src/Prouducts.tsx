import Product from './components/Product';
import './Products.css';

export default function Products() {
    const products = Array(4);

    products.fill(<Product />);

    return (
        <div className='products'>
            <h1>Explore our latest drops</h1>
            <div className='products__container'>{products}</div>
        </div>
    );
}
