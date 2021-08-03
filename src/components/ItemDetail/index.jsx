import './index.css';
import { ItemCount } from '../ItemCount';
import { useState, useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

export const ItemDetail = ({ product }) => {
    const cartContext = useContext(CartContext);
    const [count, setCount] = useState(0);
    const [size, setSize] = useState('');
    const [buy, setBuy] = useState(null);

    function onBuy (buy){
        setBuy(buy);
    }

    const onAdd = (cant, size) => {
        setCount(cant)
        setSize(size)
        const cart = {
        product,
        quantity: cant,
        talle: size
        }
        cartContext.addItem(cart);
    };

    return(
        <section className='product-detail-container'>
            <div className='product-container'>
                    <div className='img-container'>
                        <img src={product.img} className='product-img' alt='Producto' />
                    </div>
                    <div className='secondary-container'>
                        <h2 className='product-title'>{product.name}</h2>
                        <p  className='product-price'>${product.price}</p>
                        <div className='shipping-container'>
                            <img className='shipping-img' src="/images/paquete.png" alt="" />
                            <p className='shipping-text'>Envío gratis</p>
                        </div>
                        <div className='shipping-container'>
                            <img className='shipping-img' src="/images/pagos.png" alt="" />
                            <p className='shipping-text'>Mercago Pago - Transferencia Bancaria - Efectivo</p>
                        </div>
                        <ItemCount initial={1} onBuy={onBuy} onAdd={onAdd}/>
                    </div>
                </div>
        </section>
    )
}