import Icon from './components/Icon';
import './Header.css'

export default function Header() {

    return (
        <div className='header'>
            <div className='logo'>
                <Icon icon='logo'/>
                <p>SUN CO.</p>
            </div>
            <button><Icon icon='cart'/>View Cart</button>
        </div>
    );
}
