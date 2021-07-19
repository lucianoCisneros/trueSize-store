import './index.css';
import { useContext, useEffect, useState } from 'react';
import { ItemList } from '../../components/ItemList';
import { useParams } from 'react-router-dom';
import { ProductsContext } from '../../contexts/ProductsContext';
export const ItemListContainer = () => {
    const { listProducts } = useContext(ProductsContext);
    const [brandProducts, setBrandProducts] = useState([]);
    const { categories } = useParams();

    useEffect (() => {
        const waitForData = () => {
            let filterBrand = listProducts.results.filter(products => products.attributes[0].value_name === categories)

            const products = filterBrand.map(element => {
                return {
                    id: element.id,
                    title: element.title,
                    brand: element.attributes[0].value_name,
                    price: element.price,
                    img: element.thumbnail
                }
            })
            setBrandProducts(products);
        }
        waitForData();
    }, [categories, listProducts]);
    
    return (
        <div className='item-list'>
            <h2 className='title-products'>Productos</h2>
            <ItemList products={brandProducts} />
        </div>
    )
}