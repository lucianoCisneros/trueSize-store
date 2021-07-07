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
    
        <div>
            {
            !!product
              ? product.map((element, index) => {
                if ( element.id === 'MLA844318803'){
                    return (
                        <>
                            <span key={index} className='product-container'>
                                <div className='principal-container'>
                                    <h2 className='product-title'>{element.title}</h2>
                                    <img src={element.img} className='product-img' alt="Producto" />
                                </div>
                                <div className='secondary-container'>
                                    <p>{element.description}</p>
                                    <span  className='product-price'>${element.price}</span>
                                    { buy ?  <Link to={`/carrito`}><button className='shop-button' >Terminar compra</button></Link>  : <ItemCount initial={1} stock={5} onBuy={onBuy} />}
                                </div>
                            </span>
                        </>
                    )
                }
              })
              : 'Loading product...'
          }
        </div>
    )
}