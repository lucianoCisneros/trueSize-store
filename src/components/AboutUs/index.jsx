import './index.css';

export const AboutsUs = () => (
	<section>
		<div className='aboutUs-container'>
			<div className='aboutUs-item'>
				<img className='aboutUs-img' src='https://i.ibb.co/F0Xt1L8/vip.png' alt='vip' />
				<h2 className='aboutUs-title'>EXCLUSIVIDAD<span className='dot'>.</span></h2>
				<p className='aboutUs-data'>Los modelos más exlusivos del mercado.</p>
			</div>
			<div className='aboutUs-item'>
				<img className='aboutUs-img' src='https://i.ibb.co/T8jWK2z/pedidos.png' alt='caja' />
				<h2 className='aboutUs-title'>PEDIDOS<span className='dot'>.</span></h2>
				<p className='aboutUs-data'>Estos tardan 30 días aproximadamente.</p>
			</div>
			<div className='aboutUs-item'>
				<img className='aboutUs-img' src='https://i.ibb.co/mrsrhVb/envios.png' alt='entregas' />
				<h2 className='aboutUs-title'>ENVIOS<span className='dot'>.</span></h2>
				<p className='aboutUs-data'>Realizamos envíos a todo el país.</p>
			</div>
		</div>
	</section>
);
