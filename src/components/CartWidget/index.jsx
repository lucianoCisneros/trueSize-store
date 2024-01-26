import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './../../contexts/CartContext/index';
import './index.css';

export const CartWidget = () => {
  const cartContext = useContext(CartContext);

  return (
    <>
      <Link to={`/carrito`}>
        <div className='cartWidget-container'>
          <i><img className='cart' src='https://i.ibb.co/0t0cmBc/carrito.png' alt='Carrito' /></i>
          <p className='cart-counter'>{ cartContext.cart.length }</p>
        </div>
      </Link>
    </>
  );
};
