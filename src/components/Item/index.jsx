import './index.css';
import { Link } from 'react-router-dom';

export const Item = ({id, title, price, img}) => {

    return (
        <>
                <div className='item'>
                    <Link to={`/producto/${id}`}>
                        <img src={img} className='item-img' alt="Producto" />
                    </Link>
                    <h2 className='item-title'>{title}</h2>
                    <strong className='item-price'>${price}</strong>
                </div>
        </>
    )
}