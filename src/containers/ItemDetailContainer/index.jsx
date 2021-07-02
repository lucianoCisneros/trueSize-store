import './index.css';
import { useEffect, useState } from 'react';
import { getProduct } from '../../utils/Data';
import { ItemDetail } from '../../components/ItemDetail';

export const ItemDetailContainer = () => {
    let [product, setProduct] = useState([]);

    useEffect (() => {
        const waitForData = async () => {
            let data = await getProduct();
            let aux = data.map(element => {
                return{
                    title: element.title,
                    img: element.thumbnail,
                    price: element.price,
                    description: element.description
                }
            })
            setProduct(aux);
        }
        waitForData();
    }, [])

    if(product.length > 0){
        console.log(product);
    }

    return (
        <>
            <ItemDetail product={product} />
        </>
    )
}