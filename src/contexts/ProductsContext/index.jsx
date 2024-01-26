import { createContext, useEffect, useState } from 'react';
import { getFireStore } from '../../firebase/client';

export const ProductsContext = createContext();

export const ProductsComponentContext = ({children}) => {
	const [listProducts, setListProducts] = useState([]);
	const [OutstandingProduct, setOutstandingProduct] = useState([]);

	useEffect(() => {
		const DB = getFireStore();
		const COLLECTION = DB.collection('products');

		COLLECTION.get().then(response => {
			if(response.size === 0){
				console.log('No hay resultado en la base de datos!');
			};
			setListProducts(response.docs.map(element => {return {id: element.id, ...element.data()}}));
		});
	}, []);

	useEffect(() => {
		const DB = getFireStore();
		const COLLECTION = DB.collection('OutstandingsProducts');

		COLLECTION.get().then(response => {
			if(response.size === 0){
				console.log('No hay resultado en la base de datos!');
			};
			setOutstandingProduct(response.docs.map(element => {return {id: element.id, ...element.data()}}));
		});
	}, []);
	
	return (
		<ProductsContext.Provider value={{ listProducts, OutstandingProduct }}>
			{children}
		</ProductsContext.Provider>
	);
};
