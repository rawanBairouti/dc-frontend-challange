import { Link } from 'react-router-dom';
import Icon from './components/Icon';
import './Header.css'

export default function Header() {

    return (
        <header>
            <Link to='/' className='logo'>
                <Icon icon='logo'/>
                <p>SUN CO.</p>
            </Link>
            <button><Icon icon='cart'/>View Cart</button>
        </header>
    );
}
