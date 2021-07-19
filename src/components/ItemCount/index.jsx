import './index.css';
import { useState } from 'react';

export const ItemCount = ({  initial, onAdd, onBuy }) => {
  let [count, setCount] = useState(initial);

  const sumar = () => {
    setCount(count + 1);
  }

  const restar = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  return (
    <div>

      <div className='buttons-container'>
        <button className='button decrease' onClick={restar}>-</button>
        <span className='counter'>{count}</span>
        <button className='button increase' onClick={sumar}>+</button>
      </div>

      <button className='add-to-cart' onClick={() => onAdd(count)}>Agregar al carrito</button>

    </div>
  );
}