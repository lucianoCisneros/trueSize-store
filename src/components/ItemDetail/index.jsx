import './index.css';
import { ItemCount } from '../ItemCount';
import { useState, useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';

export const ItemDetail = ({ product }) => {
    const cartContext = useContext(CartContext);
    const [count, setCount] = useState(0);
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
        <section className='product-detail-container'>
            <div className='product-container'>
                    <div className='img-container'>
                        <img src={product.img} className='product-img' alt="Producto" />
                    </div>
                    <div className='secondary-container'>
                        <h2 className='product-title'>{product.name}</h2>
                        <span  className='product-price'>${product.price}</span><br />
                        { buy ?  <Link to={`/carrito`}><button className='shop-button' >Terminar compra</button></Link>  : <ItemCount initial={1} onBuy={onBuy} onAdd={onAdd} /> }
                    </div>
                </div>
        </section>
    )
}