import { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from '../components/Carousel';
import products from '../data/products';
import Icon from '../components/Icon';
import { CartContext } from '../context/CartContext';
import { Product } from '../types';
import './ProductDetails.css';

function ProductDetail() {
    const { id } = useParams();
    if (!id) {
        return null;
    }

    const product = products.find((product) => product.id == Number(id));
    if (!product) {
        console.log('no product found');
        return null;
    }
    const [quantity, setQuantity] = useState(1);
    const { addItem } = useContext(CartContext);

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            // prevent quantity from going below 1
            setQuantity(quantity - 1);
        }
    };

    const addToCart = () => {
        // create a new item object to represent this product
        let item: Product = { ...product};
        addItem(item, quantity);
        console.log('add to cart');
    };

    return (
        <div className='product__details'>
            <div className='product__details__info'>
                <Carousel images={product.carouselImages} />
                <div className='product__details__card'>
                    <div className='product__details__info__basic'>
                        <h4>{product.brand}</h4>
                        <h5>{product.name}</h5>
                        <h4 className='price'>${product.price}</h4>
                    </div>
                    <div className='product__details__info__quantity'>
                        <div className='quantity'>
                            <h6>Quantity</h6>
                            <div className='quantity-buttons'>
                                <button
                                    onClick={decreaseQuantity}
                                    disabled={quantity === 1}
                                >
                                    <Icon icon='minus' />
                                </button>
                                {quantity}
                                <button onClick={increaseQuantity}>
                                    <Icon icon='plus' />
                                </button>
                            </div>
                        </div>
                        <button className='cart-button' onClick={addToCart}>
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
            <div className='product__details__description'>
                <div className='description-text'>
                    <h4>Description</h4>
                    <p>
                        Energize your look with a fresh take on heritage adidas
                        style. The adidas Daily 3.0 Shoes cut a classic profile
                        with a modern suede upper. Your walk across campus or
                        commute across town has never looked or felt this good.
                    </p>
                    <ul>
                        <li>Regular fit</li>
                        <li>Lace Closure</li>
                        <li>Rubber outsole with vulcanized look</li>
                        <li>Imported</li>
                    </ul>
                </div>
                <img className='detail-image' src={product.detailImage} />
            </div>
        </div>
    );
}

export default ProductDetail;
