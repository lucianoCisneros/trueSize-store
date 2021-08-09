import './index.css';
import { Link } from 'react-router-dom';
import { CartWidget } from '../CartWidget';
import { useState } from 'react';

export const NavBar = () => {
    const [ showItems, setShowItems ] = useState(false);

    return (
      <>
        <nav className="menu">

          <div className='leftSide'>

            <div className='menu-logo-container'>
              <Link to={`/`}><img src="https://i.ibb.co/zfgFntF/LogoWeb.png" className="menu-logo" alt="Logo" /></Link>
            </div>
            
            <ul className="menu-items" id={ showItems ? 'hidden' : '' }>
              <Link to={`/`}><li className='menu-item'>Inicio</li></Link>
              <Link to={`/productos/sneakers`}><li className='menu-item'>Productos</li></Link>
              <Link to={`/como-comprar`}><li className='menu-item'>Como Comprar</li></Link>
              <Link to={`/contacto`}><li className='menu-item'>Contacto</li></Link>
            </ul>
          </div>

          <div className='rigthSide'>
            <CartWidget />
            <i onClick={ () => setShowItems(!showItems) }>
              <img src="https://i.ibb.co/47F8tGd/menu.png" className='menu-btn' alt="Menu hamburguesa" />
            </i>
          </div>

        </nav>
      </>
    )
}