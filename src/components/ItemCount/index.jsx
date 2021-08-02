import './index.css';
import { useState } from 'react';

export const ItemCount = ({  initial, onAdd }) => {
  let [count, setCount] = useState(initial);
  let [size, setSize] = useState('');

  const sumar = () => {
    setCount(count + 1);
  }

  const restar = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  return (
    <div className='count-container'>

      <select className='product-size' name='size' onChange={e=> setSize(e.target.value)}>
        <option value='none' defaultValue>Talle</option>
        <option value='us7'>US 7 = 25CM</option>
        <option value='us7.5'>US 7.5 = 25.5CM</option>
        <option value='us8'>US 8 = 26CM</option>
        <option value='us8.5'>US 8.5 = 26.5CM</option>
        <option value='us9'>US 9 = 27CM</option>
        <option value='us9.5'>US 9.5 = 27.5CM</option>
        <option value='us10'>US 10 = 28CM</option>
        <option value='us10.5'>US 10.5 = 28.5CM</option>
        <option value='us11'>US 11 = 29CM</option>
        <option value='us12'>US 12 = 30CM</option>
        <option value='none'>Talles Mujer</option>
        <option value='us5.5'>US 5.5 = 22.5CM</option>
        <option value='us6'>US 6 = 23CM</option>
        <option value='us6.5'>US 6.5 = 23.5CM</option>
        <option value='us7'>US 7 = 24CM</option>
        <option value='us7.5'>US 7.5 = 24.5CM</option>
        <option value='us8'>US 8 = 25CM</option>
      </select>

      <div className='buttons-container'>
        <button className='button decrease' onClick={restar}>-</button>
        <span className='counter'>{count}</span>
        <button className='button increase' onClick={sumar}>+</button>
      </div>

      <button className='add-to-cart' onClick={() => onAdd(count, size)}>Agregar al carrito</button>

    </div>
  );
}