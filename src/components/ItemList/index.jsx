import './index.css';
import { Item } from '../Item';

export const ItemList = ({ products }) => {
    return (
      <div className='container'>
          {
            !!products
              ? products.map((element, index) => {
                return (
                  <span key={index}>
                    <Item id={element.id} title={element.title} price={element.price} img={element.img} />
                  </span>
                )
              })
              : 'Loading...'
          }
      </div>
    )
  }