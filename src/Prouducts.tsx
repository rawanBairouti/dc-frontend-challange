import product1 from './assets/product1.png';
import product2 from './assets/product2.png';
import product3 from './assets/product3.png';
import product4 from './assets/product4.png';
import Product from './components/Product';
import './Products.css';

export default function Products() {
    const products = [
		{
			image: product1,
            brand: 'Off-White',
            name: 'Out Of Office "Ooo" sneakers',
            price: 775,
        },
        {
			image: product2,
            brand: 'Nike',
            name: 'Nike Gamma Force',
            price: 200,
        },
        {
			image: product3,
            brand: 'Nike',
            name: 'Cosmic Unity 3',
            price: 160,
        },
        {
			image: product4,
            brand: 'adidas',
            name: 'DAILY 3.0 SHOES',
            price: 98.99,
        },
    ];

	const productsArray = products.map(product => 
		<Product key={product.name} image={product.image} brand={product.brand} name={product.name} price={product.price} />
	)

    return (
        <div className='products'>
            <h1>Explore our latest drops</h1>
            <div className='products__container'>{productsArray}</div>
        </div>
    );
}
