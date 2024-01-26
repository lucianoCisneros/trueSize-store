import { Item } from '../Item';
import './index.css';

export const ItemList = ({ products }) => (
  <div className='container'>
    {
      !!products
        ? products.map((element, index) => {
          return (
            <span key={index}>
              <Item id={element.id} title={element.title} brand={element.brand} price={element.price} img={element.img} />
            </span>
          );
        })
        : 'Loading...'
    }
  </div>
);
