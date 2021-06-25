import './index.css'

export const Item = ({title, price, img}) => {
    return (
        <div className='item'>
            <img src={img} alt="Producto" />
            <h2>{title}</h2>
            <strong>{price}</strong>
        </div>
    )
}