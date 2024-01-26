import { Link } from 'react-router-dom';
import './index.css';

export const Item = ({ id, title, price, brand, img }) => (
	<div className='item'>
		<div className='item-img_container'>
			<Link to={`/producto/${id}`}>
				<img src={img} className='item-img' alt='Producto' />
			</Link>
		</div>
			<div className='item-data_container'>
				<h4 className='item-brand'>{brand}</h4>
				<h3 className='item-title'>{title}</h3>
				<p className='item-price'>${price}</p>
			</div>
	</div>
);
