import './index.css';
import { Link } from 'react-router-dom';
import { CartWidget } from '../CartWidget';

export const NavBar = () => {
    return (
      <div className="NavBar">
        
        <nav className="menu">

          <div>
            <Link to={`/`}><img src="/images/LogoWeb.png" className="menu-logo" alt="Logo" /></Link>
          </div>

          <ul className="menu-items">
            <Link to={`/`}><li className='menu-item'>Inicio</li></Link>
            <Link to={`/productos/sneakers`}><li className='menu-item'>Productos</li></Link>
            <Link to={`/como-comprar`}><li className='menu-item'>Como Comprar</li></Link>
            <li className='menu-item'>Contacto</li>
          </ul>

          <CartWidget />

          <span className="menu-btn">
                <i className="fa fa-bars"></i>
          </span>

        </nav>

      </div>
    )
}