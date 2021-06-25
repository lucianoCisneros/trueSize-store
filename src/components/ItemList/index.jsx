import { ItemListContainer } from '../../containers/ItemListContainer';
import { Item } from '../Item';

export const ItemList = () => {
    return(
        <div className='container'>
            <div>
            {ItemListContainer.products.map((element, index) => {
                return(
                    <span key={index}>
                        <Item title={element.title} price={element.price} img={element.img} />
                    </span>
                )
            })}
            </div>
        </div>
    )
}