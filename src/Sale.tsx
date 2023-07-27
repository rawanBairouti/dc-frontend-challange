import Icon from './components/Icon';
import saleImage from './assets/sale-image.png';
import './Sale.css';

export default function Sale() {

    return (
        <div className='sale'>
            <div className='sale__text'>
                <h2>25% OFF</h2>
                <h1>Summer Sale</h1>
                <h4>Discover our summer styles with discount</h4>
                <button>
                    Shop Now <Icon icon='arrowRight' />
                </button>
            </div>
			<div className='sale__img'>
				<img src={saleImage} />
			</div>
        </div>
    );
}
