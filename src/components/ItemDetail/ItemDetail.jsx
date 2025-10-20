import { useCartContext } from "../../context/CardContext/useCartContext";
import { Item } from "../Item/Item";

export const ItemDetail = ({detail}) => {
    const {addItem} = useCartContext();
    return (
        <Item {...detail}>
            <p>Descripción: {detail.description}</p>
            <button onClick={() => {
                addItem(detail);
            }}>Agregar al carrito</button>
        </Item>
       
    );
};