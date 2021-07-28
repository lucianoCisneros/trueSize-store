import './index.css';

export const CartItem = ( {cartProduct, onQuitar} ) => {
  

  const remove = () => {
    onQuitar(cartProduct.itemList.id)
  }

  return (
    <div className='cartItem-container'>
        <div className='cartItem-img-container'>
            <img className='cartItem-img' src={ cartProduct.itemList.img } alt="" />
        </div>
        <div className='cartItem-data-container'>
            <h3 className='cartItem-title'>{ cartProduct.itemList.name }</h3>
            <div className='cartItem-data'>
              <p className='cartItem-quantity data'>Cantidad: {cartProduct.cantidad}</p>
              <p className='cartItem-quantity data'>Talle: {cartProduct.size}</p>
              <p className='cartItem-price data'>Precio: ${cartProduct.itemList.price}</p>
              <p className='cartItem-subTotal data'>Subtotal: ${cartProduct.subTotal} </p>
            </div>
            <button className='cartItem-delete' onClick={remove}>Borrar</button>
        </div>
    </div>
  );
};