import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from '../components/Carousel';
import products from '../data/products';
// import { useCart } from './CartContext'; // import your cart context or whatever you use for state management

function ProductDetail() {
	const { id } = useParams();
	if (!id) {
		return null;
	}

	const product = products.find(product => product.id == Number(id));
	if (!product) {
		console.log('no product found');
        return null;
    }
	const [quantity, setQuantity] = useState(1);
	// const { addToCart } = useCart(); // Use your own function to add items to the cart
	const handleQuantityChange = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		setQuantity(Number(event.target.value));
	};

	// const handleAddToCart = () => {
	//     addToCart(product, quantity);
	// };

	return (
		<div className='product'>
			<Carousel images={product.carouselImages} />{' '}
			<div className='product__info'>
				<h4>{product.brand}</h4>
				<h5>{product.name}</h5>
				<h4 className='price'>${product.price}</h4>
			</div>
			<select value={quantity} onChange={handleQuantityChange}>
				{Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
					<option key={num} value={num}>
						{num}
					</option>
				))}
			</select>
			<button>Add to cart</button>
		</div>
	);
}

export default ProductDetail;
