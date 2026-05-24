import { createContext, useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/client';

export const ProductsContext = createContext();

const mapSnapshot = (response) =>
  response.docs.map((element) => ({ id: element.id, ...element.data() }));

export const ProductsComponentContext = ({ children }) => {
  const [listProducts, setListProducts] = useState([]);
  const [OutstandingProduct, setOutstandingProduct] = useState([]);

  useEffect(() => {
    getDocs(collection(db, 'products')).then((response) => {
      if (response.size === 0) {
        console.log('No hay resultado en la base de datos!');
      }
      setListProducts(mapSnapshot(response));
    });
  }, []);

  useEffect(() => {
    getDocs(collection(db, 'OutstandingsProducts')).then((response) => {
      if (response.size === 0) {
        console.log('No hay resultado en la base de datos!');
      }
      setOutstandingProduct(mapSnapshot(response));
    });
  }, []);

  return (
    <ProductsContext.Provider value={{ listProducts, OutstandingProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};
