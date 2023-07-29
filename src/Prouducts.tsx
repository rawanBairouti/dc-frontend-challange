import Product from './components/Product';
import products from './data/products';
import './Products.css';

export default function Products() {
    

	const productsArray = products.map(
        (product: {
            id: number;
            name: string;
            mainImage: string;
            brand: string;
            price: number;
        }) => (
            <Product
                key={product.name}
                id={product.id}
                image={product.mainImage}
                brand={product.brand}
                name={product.name}
                price={product.price}
            />
        )
    );

    return (
        <div className='products'>
            <h1>Explore our latest drops</h1>
            <div className='products__container'>{productsArray}</div>
        </div>
    );
}
