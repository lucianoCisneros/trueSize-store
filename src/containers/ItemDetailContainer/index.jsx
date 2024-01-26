import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../../components/ItemDetail';
import { ProductsContext } from '../../contexts/ProductsContext';
import './index.css';

export const ItemDetailContainer = () => {
	const { listProducts } = useContext(ProductsContext);
	const { id } = useParams();
	const [product, setProduct] = useState([]);

	useEffect (() => {
		const waitForData = () => {
			let findId = listProducts.find(product => product.id === id);
			setProduct(findId);
		}
		waitForData();
	}, [ id, listProducts ])

	return (
		<>
			<ItemDetail product={product} />
		</>
	);
};
