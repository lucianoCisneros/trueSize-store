import './index.css';
import { Link } from 'react-router-dom';

export const CartWidget = () => {
    return (
      <>
          <div>
            <Link to={`/carrito`}><i><img className="cart" src="/images/carrito.png" alt="Carrito" /></i></Link>
          </div>
      </>
    )
}