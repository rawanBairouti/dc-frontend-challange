import { Link } from 'react-router-dom';
import './Product.css';

interface ProductProps {
    id: number,
    image: string;
    brand: string;
    name: string;
    price: number;
}

const Product: React.FC<ProductProps> = ({ id, image, brand, name, price }) => {

    return (
        <Link to={`/products/${id}`} className='product'>
            <img className='product__image' src={image} alt='product image' />
            <div className='product__info'>
                <h4>{brand}</h4>
                <h5>{name}</h5>
                <h4 className='price'>${price}</h4>
            </div>
        </Link>
	);
	
};

export default Product;
