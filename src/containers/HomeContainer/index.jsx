import './index.css';
import { useContext } from 'react';
import { ShopContext } from '../../contexts/ShopContext';


export const HomeContainer = () => {
    const estadoGlobal = useContext(ShopContext);
    console.log(estadoGlobal);

    return (
        <>
            <section className="banner">
                <h1 className="title">Bienvenido a True<span className="dot">.</span>Size Store</h1>
                <h3 className="sub-title">Tienda de Sneakers & Streetwear</h3>
            </section>
        </>
    )
}