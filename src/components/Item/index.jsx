import './index.css';
import { Link } from 'react-router-dom';

export const Item = ({id, title, price, img}) => {

    return (
        <>
                <div className='item'>
                    <Link to={`/producto/${id}`}>
                    <div className='item-img-container'>
                        
                            <img src={img} className='item-img' alt="Producto" />
                        
                    </div>
                    <div className='item-data-container'>
                        <p className='item-price'>${price}</p>
                        <h2 className='item-title'>{title}</h2>
                    </div>
                    </Link>
                </div>
        </>
    )
}