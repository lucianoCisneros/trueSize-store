import './index.css';
import { ItemCount } from '../ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const ItemDetail = ({ product }) => {
    const [buy, setBuy] = useState(null);

    function onBuy (buy){
        setBuy(buy);
    }

    return(
        <>
            <span className='product-container'>
                <div className='principal-container'>
                    <img src={product.thumbnail} className='product-img' alt="Producto" />
                </div>
                <div className='secondary-container'>
                    <h2 className='product-title'>{product.title}</h2>
                    <span  className='product-price'>${product.price}</span>
                    { buy ?  <Link to={`/carrito`}><button className='shop-button' >Terminar compra</button></Link>  : <ItemCount initial={1} stock={5} onBuy={onBuy} />}
                </div>
            </span>
        </>
    )
}