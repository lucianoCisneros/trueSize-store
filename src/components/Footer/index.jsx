import './index.css';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return(
        <footer>
            <div className='footer-container'>

                <div className='links-container'>
                    <div>
                        <Link to={`/`}><li className='title-link'>Inicio</li></Link>
                    </div>

                    <ul className='products-links'>
                        <Link to={`/productos/sneakers`}><li className='title-link'>Productos</li></Link>
                        <Link to={`/productos/Jordan`}><li className='item-link'>Jordan</li></Link>
                        <Link to={`/productos/Nike`}><li className='item-link'>Nike</li></Link>
                        <Link to={`/productos/Adidas`}><li className='item-link'>Adidas</li></Link>
                        <Link to={`/productos/Vans`}><li className='item-link'>Vans</li></Link>
                    </ul>

                    <div>
                        <Link to={`/como-comprar`}><li className='title-link'>Como Comprar</li></Link>
                    </div>

                    <div>
                        <Link to={`/contacto`}><li className='title-link'>Contacto</li></Link>
                    </div>
                </div>

                <div className='footer-border'></div>

                <div className='icons-container'>
                    <i className='icon'><img src="/images/whatsapp.png" alt="Whatsapp" /></i>
                    <i className='icon'><img src="/images/instagram.png" alt="Instagram" /></i>
                </div>

            </div>
        </footer>
    )
}