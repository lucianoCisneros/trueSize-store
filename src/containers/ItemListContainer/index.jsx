import './index.css';
import { useContext, useEffect, useState } from 'react';
import { ItemList } from '../../components/ItemList';
import { useParams } from 'react-router-dom';
import { ProductsContext } from '../../contexts/ProductsContext';

export const ItemListContainer = () => {
    const { listProducts } = useContext(ProductsContext);
    const [brandProducts, setBrandProducts] = useState([]);
    const { brand } = useParams();

    console.log(brand);

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
                    }
                })
                setBrandProducts(products);
            } else {
                const allProducts = listProducts.map(element => {
                    return {
                        id: element.id,
                        title: element.name,
                        brand: element.brand,
                        price: element.price,
                        img: element.img
                    }
                })
                setBrandProducts(allProducts);
            }
        }
        waitForData();
    }, [brand, listProducts]);

    console.log(brand);

    return (
        <section className='item-list'>
            <h2 className='title-products'>Productos</h2>
            <ItemList products={brandProducts} />
        </section>
    )
}