import './index.css';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return(
        <div className='footer-container'>
            <div>
                <h4><Link to={`/productos`}>Productos</Link></h4>
                <ul>
                    <li>Nike</li>
                    <li>Jordan</li>
                    <li>Adidas</li>
                    <li>Vans</li>
                </ul>
            </div>

            <div>
                <i><img src="/images/whatsapp.png" alt="Whatsapp" /></i>
                <i><img src="/images/instagram.png" alt="Instagram" /></i>
            </div>
        </div>
    )
}