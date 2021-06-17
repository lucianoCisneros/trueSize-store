import './index.css';
import { CartWidget } from '../CartWidget';

export const NavBar = () => {
    return (
      <div className="NavBar">
        
        <nav className="menu">

          <div>
            <img src="/images/LogoWeb.png" className="menu-logo" alt="Logo" />
          </div>

          <ul className="menu-items">
            <li><a>Inicio</a></li>
            <li><a>Productos</a></li>
            <li><a>Como Comprar</a></li>
            <li><a>Contacto</a></li>
          </ul>

          <CartWidget />

          <span className="menu-btn">
                <i className="fa fa-bars"></i>
          </span>

        </nav>

      </div>
    )
}