import './index.css';
import { useState } from 'react';

export const ItemCount = ({ stock, initial }) => {
  const [count, setCount] = useState(initial);

  const onAdd = () => {
    if (count < stock) {
      setCount(count + 1);
    } else {
      alert('No disponemos del stock suficiente para realizar este pedido.')
    }
  }

  const onSubstract = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  return (
    <div>

      <div className='buttons-container'>
        <button className='button decrease' onClick={onSubstract}>-</button>
        <span className='counter'>{count}</span>
        <button className='button increase' onClick={onAdd}>+</button>
      </div>

      <button className='add-to-cart'>Agrerar al carrito</button>

    </div>
  );
}