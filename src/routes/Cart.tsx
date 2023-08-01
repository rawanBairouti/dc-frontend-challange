import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { CartContext } from '../context/CartContext';
import Icon from '../components/Icon';
import './Cart.css';

const Cart: React.FC = () => {
    const {
        cartItems,
        totalItems,
        incrementQuantity,
        decrementQuantity,
        removeItem,
    } = useContext(CartContext);

    const increaseQuantity = (id: number) => {
        console.log('incrementing item:', id);
        incrementQuantity(id);
    };

    const decreaseQuantity = (id: number) => {
        console.log('decrementing item:', id);
        decrementQuantity(id);
    };

    const subtotal = cartItems.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0
    );

    const tax = subtotal * 0.1; // 10% tax
    const shippingAndDelivery = 5; // flat rate shipping
    const total = subtotal + tax + shippingAndDelivery;

    const navigate = useNavigate();

    if (totalItems === 0) {
        return (
            <div className='empty-cart'>
                <h2>Your Cart is empty</h2>
                <h1>Explore latest drops</h1>
                <button onClick={() => navigate('/')}>
                    Shop Now <Icon icon='arrowRight' />
                </button>
            </div>
        );
    } else if (totalItems >= 1) {
        return (
            <div className='cart'>
                <div className='your-cart'>
                    <h2>Your Bag:</h2>
                    {cartItems.map((item) => (
                        <div key={item.product.id} className='item'>
                            <div className='item__picture'>
                                <img
                                    src={item.product.mainImage}
                                    alt={item.product.name}
                                />
                            </div>
                            <div className='info'>
                                <div className='name-brand'>
                                    <h4>{item.product.brand}</h4>
                                    <h5>{item.product.name}</h5>
                                </div>
                                <h4 className='price'>${item.product.price}</h4>
                            </div>
                            <div className='buttons'>
                                <button
                                    onClick={() =>
                                        decreaseQuantity(item.product.id)
                                    }
                                >
                                    <Icon icon='minus' />
                                </button>
                                {item.quantity}
                                <button
                                    onClick={() =>
                                        increaseQuantity(item.product.id)
                                    }
                                >
                                    <Icon icon='plus' />
                                </button>
                                <button
                                    onClick={() => removeItem(item.product.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='summary'>
                    <h2>Summary</h2>
                    <h4>Total items: {totalItems}</h4>
                    <h4>Subtotal: ${subtotal.toFixed(2)}</h4>
                    <h4>
                        Shipping & Delivery: ${shippingAndDelivery.toFixed(2)}
                    </h4>
                    <h4>Tax: ${tax.toFixed(2)}</h4>
                    <h4>Total: ${total.toFixed(2)}</h4>
                    <button>Checkout</button>
                </div>
            </div>
        );
    }
};

export default Cart;
