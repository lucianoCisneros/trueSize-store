import './index.css';
import { ItemCount } from '../ItemCount';
import { useState, useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';

export const ItemDetail = ({ product }) => {
    const cartContext = useContext(CartContext);
    const [count, setCount]= useState(0);
    const [buy, setBuy] = useState(null);

    function onBuy (buy){
        setBuy(buy);
    }

    const onAdd = (cant) => {
        setCount(cant)
        const cart = {
        product,
        quantity: cant
        }
        cartContext.addItem(cart);
    };

    return(
        <>
            <span className='product-container'>
                <div className='principal-container'>
                    <img src={product.thumbnail} className='product-img' alt="Producto" />
                </div>
                <div className='secondary-container'>
                    <h2 className='product-title'>{product.title}</h2>
                    <span  className='product-price'>${product.price}</span><br />
                    { buy ?  <Link to={`/carrito`}><button className='shop-button' >Terminar compra</button></Link>  : <ItemCount initial={1} onBuy={onBuy} onAdd={onAdd} />}
                </div>
            </span>
        </>
    )
}