import { Link, useNavigate } from 'react-router-dom';
import Icon from './components/Icon';
import './Header.css'

export default function Header() {

    const navigate = useNavigate();

    return (
        <header>
            <Link to='/' className='logo'>
                <Icon icon='logo'/>
                <p>SUN CO.</p>
            </Link>
            <button onClick={() => navigate('/cart')}><Icon icon='cart'/>View Cart</button>
        </header>
    );
}
