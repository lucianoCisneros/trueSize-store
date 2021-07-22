import './index.css';

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
        </>
    )
}