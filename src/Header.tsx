import { Link, useNavigate } from 'react-router-dom';
import Icon from './components/Icon';
import './Header.css'
import React, { useContext } from 'react';
import { CartContext } from './context/CartContext';

export default function Header() {

    const { totalItems } = useContext(CartContext)
    const navigate = useNavigate();

    return (
        <header>
            <Link to='/' className='logo'>
                <Icon icon='logo' />
                <p>SUN CO.</p>
            </Link>
            {totalItems ? (
                <button onClick={() => navigate('/cart')}>
                    <Icon icon='cart' />
                    View Cart<span className='total-items'>{totalItems}</span>
                </button>
            ) : (
                <button onClick={() => navigate('/cart')}>
                    <Icon icon='cart' />
                    View Cart
                </button>
            )}
        </header>
    );
}
