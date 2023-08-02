import { useState, useEffect } from 'react';
import Product from './components/Product';
import './Products.css';

export default function Products() {
    
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:3000/api/products') // Fetch products from the server
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error('Error fetching products:', error));
    }, []);


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
                mainImage={product.mainImage}
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
