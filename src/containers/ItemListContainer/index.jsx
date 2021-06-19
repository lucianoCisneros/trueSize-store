import './index.css';
import { ItemCount } from '../../components/ItemCount'

export const ItemListContainer = () => {
    return (
        <div className="ItemListContainer">
            <h2>Productos Destacados</h2>
            <ItemCount stock={4} initial={1} />
        </div>
    )
}