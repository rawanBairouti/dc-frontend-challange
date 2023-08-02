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
        incrementQuantity(id);
    };

    const decreaseQuantity = (id: number) => {
        decrementQuantity(id);
    };

    const subtotal = cartItems.reduce(
        (total, item) => total + item.product.price * item.quantity, 0);

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
                    <h2>Your Bag</h2>
                    {cartItems.map((item) => (
                        <div key={item.product.id} className='item'>
                            <div className='item__picture'>
                                <img
                                    // src={item.product.mainImage}
                                    src={`http://localhost:3000/${item.product.mainImage}`}
                                    alt={item.product.name}
                                />
                            </div>
                            <div className='item__summary'>
                                <div className='info'>
                                    <div className='name-brand'>
                                        <h4>{item.product.brand}</h4>
                                        <h5>{item.product.name}</h5>
                                    </div>
                                    <h4 className='price'>
                                        ${item.product.price}
                                    </h4>
                                </div>
                                <div className='buttons'>
                                    <div className='quantity-buttons'>
                                        <button
                                            onClick={() =>
                                                decreaseQuantity(
                                                    item.product.id
                                                )
                                            }
                                        >
                                            <Icon icon='minus' />
                                        </button>
                                        {item.quantity}
                                        <button
                                            onClick={() =>
                                                increaseQuantity(
                                                    item.product.id
                                                )
                                            }
                                        >
                                            <Icon icon='plus' />
                                        </button>
                                    </div>
                                    <div className='remove-button'>
                                        <button
                                            onClick={() =>
                                                removeItem(item.product.id)
                                            }
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='summary'>
                    <div className='summary__card'>
                        <h2>Summary</h2>
                        <div className='summary__money'>
                            <div className='summary__money__title'>
                                <h4>Subtotal</h4>
                                <h4>Shipping and delivery</h4>
                                <h4>Tax</h4>
                            </div>
                            <div className='summary__money__cost'>
                                <h4>${subtotal.toFixed(2)}</h4>
                                <h4>${shippingAndDelivery.toFixed(2)}</h4>
                                <h4>${tax.toFixed(2)}</h4>
                            </div>
                        </div>
                        <div className='checkout'>
                            <div className='total-cost'>
                                <h4 className='total'>Total</h4>
                                <h4 className='cost'>${total.toFixed(2)}</h4>
                            </div>
                            <button>
                                Checkout
                                <Icon icon='arrowRight' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Cart;
