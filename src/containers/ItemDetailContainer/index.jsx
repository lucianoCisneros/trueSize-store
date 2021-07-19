import './index.css';
import { useContext, useEffect, useState } from 'react';
import { ItemDetail } from '../../components/ItemDetail';
import { useParams } from 'react-router-dom';
import { ProductsContext } from '../../contexts/ProductsContext';

export const ItemDetailContainer = () => {
    const { listProducts } = useContext(ProductsContext);
    let [product, setProduct] = useState([]);
    const { id } = useParams();

    useEffect (() => {
        const waitForData = () => {
            let findId = listProducts.results.find(product => product.id === id);
            setProduct(findId);
        }
        waitForData();
    }, [ id, listProducts ])

    return (
        <>
            <ItemDetail product={product} />
        </>
    )
}