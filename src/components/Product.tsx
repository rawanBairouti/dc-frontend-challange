import { Link } from 'react-router-dom';
import './Product.css';
import { Product as ProductType } from '../types';

const Product: React.FC<ProductType> = ({ id, mainImage, brand, name, price }) => {

    return (
        <Link to={`/products/${id}`} className='product'>
            <img className='product__image' src={mainImage} alt='product image' />
            <div className='product__info'>
                <h4>{brand}</h4>
                <h5>{name}</h5>
                <h4 className='price'>${price}</h4>
            </div>
        </Link>
	);
	
};

export default Product;
