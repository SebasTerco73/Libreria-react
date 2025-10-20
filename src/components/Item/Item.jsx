// Por parametro recibimos el spread operator de las props del item
// 3) Es usado por ItemList para renderizar cada producto

import "./Item.css";

export const Item = ({name, price, description, imageUrl, children}) => {
    return <article>
        <img src={imageUrl} alt={description} />
        <h2 className="product-title">{name}</h2>
        {children}
    </article>; 
};
