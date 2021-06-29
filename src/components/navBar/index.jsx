import './index.css';
import { Link } from 'react-router-dom';
import { CartWidget } from '../CartWidget';

export const NavBar = () => {
    return (
      <div className="NavBar">
        
        <nav className="menu">

          <div>
            <img src="/images/LogoWeb.png" className="menu-logo" alt="Logo" />
          </div>

          <ul className="menu-items">
            <li><Link to={`/`}>Inicio</Link></li>
            <li><Link to={`/productos`}>Productos</Link></li>
            <li>Como Comprar</li>
            <li>Contacto</li>
          </ul>

          <CartWidget />

          <span className="menu-btn">
                <i className="fa fa-bars"></i>
          </span>

        </nav>

      </div>
    )
}