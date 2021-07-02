import './index.css';
import { useEffect, useState } from 'react';
import { getData } from '../../utils/Data';
import { ItemList } from '../../components/ItemList';
import { useParams } from 'react-router-dom';

export const ItemListContainer = () => {
    let [products, setProducts] = useState([]);
    const {categories} = useParams();

    useEffect (() => {
        const waitForData = async () => {
            let data = await getData({ categories });
            let aux = data.map(element => {
                return{
                    title: element.title,
                    price: element.price,
                    img: element.thumbnail
                }
            })
            setProducts(aux);
        }
        waitForData();
    }, [categories])

    if(products.length > 0){
        console.log(products);
    }

    return (
        <div className='item-list'>
            <h2>Productos</h2>
            <ItemList products={products} />
        </div>
    )
}