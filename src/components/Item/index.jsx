import './index.css'

export const Item = ({title, price, img}) => {
    return (
        <>
            <div className='item'>
                <img src={img} className='item-img' alt="Producto" />
                <h2 className='item-title'>{title}</h2>
                <strong className='item-price'>${price}</strong>
            </div>
        </>
    )
}