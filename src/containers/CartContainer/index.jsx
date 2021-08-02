import './index.css';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { CartItem } from '../../components/CartItem';
import { useState } from 'react';

export const CartContainer = () => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

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
                <button className='cart-button' onClick={ cartContext.deleteAll }> Borrar todo</button>
              </div>
            </div>

            <div className='finish-order-container'>
              <form id='orderForm' className='order-form'>
                <h2 className='finish-order'>Finalizar Compra</h2>
                <input type="text" placeholder='Nombre' onInput={(e) => {setName(e.target.value)}} />
                <input type="tel" placeholder='Telefono' onInput={(e) => {setPhone(e.target.value)}} />
                <input type="email" placeholder='Email' onInput={(e) => {setEmail(e.target.value)}} />
                
                <div>
                  <button className='finish-order-button' onClick={ (e) => { e.preventDefault() ; cartContext.createOrder(name, phone, email) }}>Confirmar</button>
                  <button className='cancel-order-button' type='reset'>Cancelar</button>
                </div>
              </form>
            </div>

          </div>
        }
      </section>
    )
  };