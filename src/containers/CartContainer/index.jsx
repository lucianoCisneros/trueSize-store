import './index.css';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { CartItem } from '../../components/CartItem';

export const CartContainer = () => {

    const cartContext = useContext(CartContext);

    return (
      <section className='cart-container'>
        <h1 className='cart-title'>Carrito</h1>
        { cartContext.cart.length === 0 ? 
            <div>
                <p className='cart-empty'>Tu carrito está vacío.</p>
            </div>
        : 
          <div>
            { cartContext.cart.map((element, index) => {
                return (
                <div key={index}>
                    <CartItem  cartProduct={element} onQuitar={cartContext.deleteItem} ></CartItem>
                </div>
                )
                })
            }

            <div className='cart-finish'>
              <h1 className='cart-total'>Total: ${ cartContext.getTotal() } </h1>
              <div>
                <button className='buy-button'>Comprar</button>
                <button className='cart-button' onClick={cartContext.deleteAll}> Borrar todo</button>
              </div>
            </div>
          
          </div>
        }
      </section>
    )
  };