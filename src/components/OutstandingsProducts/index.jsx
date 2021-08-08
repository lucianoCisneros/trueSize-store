import './index.css';
import { ProductsContext } from '../../contexts/ProductsContext';
import { useContext } from 'react';
import { useEffect, useState } from 'react';
import { ItemList } from '../ItemList';

export const OutstandingsProducts = () => {
    const { OutstandingProduct } = useContext(ProductsContext);
    const [OutstandingProducts, setOutstandingProducts] = useState([]);

    useEffect(() => {
        const waitForData = () => {
            const showOutstandingProducts = OutstandingProduct.map(element => {
                return {
                    id: element.id,
                    title: element.name,
                    brand: element.brand,
                    price: element.price,
                    img: element.img
                }
            })
            setOutstandingProducts(showOutstandingProducts);
        }
        waitForData();
    }, [OutstandingProduct])

    return (
        <section>
            <h2 className='outstandingProducts-title'>Productos Destacados</h2>
            <ItemList products={OutstandingProducts} />
        </section>
    )
}