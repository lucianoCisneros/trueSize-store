import { Link } from 'react-router-dom';
import './index.css';

export const Footer = () => (
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
				<a href='http://wa.me/541136873100?text=Hola,%20como%20estas?' target='_blank' rel='noopener noreferrer'><i><img className='icon' src='https://i.ibb.co/SmWhQcW/whatsapp.png' alt='Whatsapp' /></i></a>
				<a href='https://www.instagram.com/truesize.store' target='_blank' rel='noopener noreferrer'><i><img className='icon' src='https://i.ibb.co/K0DcPjr/instagram.png' alt='Instagram' /></i></a>
			</div>
		</div>
	</footer>
);
