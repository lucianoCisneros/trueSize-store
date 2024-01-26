import { Link } from 'react-router-dom';
import './index.css';

export const OutstandingsBrands = () => (
	<section className='outstandings-brands'>
		<div className='brand-secondary'>
			<Link to={`/productos/Jordan`}>
				<div className='brand-jordan'>
					<h2 className='brand-title'>Jordan</h2>
				</div>
			</Link>
		</div>
		<div className='brand-secondary'>
			<Link to={`/productos/Nike`}>
				<div className='brand-nike'>
					<h2 className='brand-title'>Nike</h2>
				</div>
			</Link>
			<Link to={`/productos/Adidas`}>
				<div className='brand-adidas'>
					<h2 className='brand-title'>Adidas</h2>
				</div>
			</Link>
		</div>
	</section>
);
