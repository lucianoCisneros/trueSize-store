import './index.css';
import { useEffect, useState } from 'react';
import { getData } from '../../utils/Data';
import { ItemList } from '../../components/ItemList';

export const ItemListContainer = () => {
    let [products, setProducts] = useState([]);

    useEffect (() => {
        const waitForData = async () => {
            let data = await getData('sneakers');
            let aux = data.map(element => {
                return{
                    title: element.title,
                    price: element.price,
                    img: element.thumnail
                }
            })
            setProducts(aux);
        }
        waitForData();
    }, [])

    if(products.length > 0){
        console.log(products);
    }

    return (
        <ItemList />
    )
}