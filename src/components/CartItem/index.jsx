import './index.css';

export const CartItem = ( {cartProduct, onQuitar} ) => {
  

  const remove = () => {
    onQuitar(cartProduct.itemList.id)
  }

  return (
    <div className='cartItem-container'>
        <div>
            <img className='cartItem-img' src={ cartProduct.itemList.thumbnail } alt="" />
        </div>
        <div>
            <h3 className='cartItem-title'>{ cartProduct.itemList.title }</h3>
            <div className='cartItem-data'>
              <p className='cartItem-quantity data'>Cantidad: {cartProduct.cantidad}</p>
              <p className='cartItem-price data'>Precio: ${cartProduct.itemList.price}</p>
              <p className='cartItem-subTotal data'>Subtotal: ${cartProduct.subTotal} </p>
            </div>
            <button className='cartItem-delete' onClick={remove}>Eliminar</button>
        </div>
    </div>
  );
};