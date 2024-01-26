import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ItemList } from '../../components/ItemList';
import { ProductsContext } from '../../contexts/ProductsContext';
import './index.css';

export const ItemListContainer = () => {
	const { listProducts } = useContext(ProductsContext);
	const { brand } = useParams();
	const [brandProducts, setBrandProducts] = useState([]);

	useEffect (() => {
		const waitForData = () => {
			if (brand !== 'sneakers'){
				let filterBrand = listProducts.filter(products => products.brand === brand);
				const products = filterBrand.map(element => {
					return {
						id: element.id,
						title: element.name,
						brand: element.brand,
						price: element.price,
						img: element.img
					};
				});
				setBrandProducts(products);
			} else {
				const allProducts = listProducts.map(element => {
					return {
						id: element.id,
						title: element.name,
						brand: element.brand,
						price: element.price,
						img: element.img
					};
				});
				setBrandProducts(allProducts);
			}
		}
		waitForData();
	}, [brand, listProducts]);

	return (
		<section className='item-list'>
			<div className='header-products'>
				<h2 className='title-products'>Productos</h2>
				<div className='filter-container'>
					<h3 className='filter-products'>Filtrar por marca:</h3>
					<ul className='brands-list'>
						<Link to={`/productos/Jordan`}><li className='filter-item'>Jordan</li></Link>
						<Link to={`/productos/Nike`}><li className='filter-item'>Nike</li></Link>
						<Link to={`/productos/Adidas`}><li className='filter-item'>Adidas</li></Link>
					</ul>
				</div>
			</div>
			<ItemList products={brandProducts} />
		</section>
	);
};
