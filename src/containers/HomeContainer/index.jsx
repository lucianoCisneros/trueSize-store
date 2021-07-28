import './index.css'; 
import { Link } from 'react-router-dom';

export const HomeContainer = () => {
    return (
        <>
            <section className="banner">
                <h1 className="title">True<span className="dot">.</span>Size Store</h1>
                <h3 className="sub-title">Sneakers & Streetwear</h3>
            </section>

            <section>
                <div className='aboutUs-container'>
                    <div className='aboutUs-item'>
                        <img className='aboutUs-img' src="/images/vip.png" alt="" />
                        <h2 className='aboutUs-title'>EXCLUSIVIDAD<span className='dot'>.</span></h2>
                        <p className='aboutUs-data'>Los modelos más exlusivos del mercado.</p>
                    </div>

                    <div className='aboutUs-item'>
                        <img className='aboutUs-img' src="/images/pedidos.png" alt="" />
                        <h2 className='aboutUs-title'>PEDIDOS<span className='dot'>.</span></h2>
                        <p className='aboutUs-data'>Estos tardan 30 días aproximadamente.</p>
                    </div>

                    <div className='aboutUs-item'>
                        <img className='aboutUs-img' src="/images/envios.png" alt="" />
                        <h2 className='aboutUs-title'>ENVIOS<span className='dot'>.</span></h2>
                        <p className='aboutUs-data'>Realizamos envíos a todo el país.</p>
                    </div>
                </div>
            </section>

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
        </>
    )
}