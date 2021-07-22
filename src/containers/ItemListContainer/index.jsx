import './index.css';
import { useContext, useEffect, useState } from 'react';
import { ItemList } from '../../components/ItemList';
import { useParams } from 'react-router-dom';
import { ProductsContext } from '../../contexts/ProductsContext';
export const ItemListContainer = () => {
    const { listProducts } = useContext(ProductsContext);
    const [brandProducts, setBrandProducts] = useState([]);
    const { brand } = useParams();

    useEffect (() => {
        const waitForData = () => {
            let filterBrand = listProducts.filter(products => products.brand === brand);

            const products = filterBrand.map(element => {
                return {
                    id: element.id,
                    title: element.name,
                    price: element.price,
                    img: element.img
                }
            })
            setBrandProducts(products);
        }
        waitForData();
    }, [brand, listProducts]);
    
    return (
        <section className='item-list'>
            <h2 className='title-products'>Productos</h2>
            <ItemList products={brandProducts} />
        </section>
    )
}