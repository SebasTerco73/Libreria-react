// 3) Crear el CartProvider que envolverá la aplicación y proveerá el contexto a los componentes que lo necesiten.
// El contexto es un objeto que contiene el estado global y las funciones para modificarlo.
import { useState } from "react";
import { CartContext } from "./CartContext"


// Le pasamos los children para que renderice los componentes que estén dentro del provider.
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]); // Aqca iría el estado del carrito y la función para modificarlo.   
    
    const existInCart = (id) => {
        const exist = cart.some((prod) => prod.id === id);
        return exist;
    };

    const addItem = (item) => {
        if (existInCart(item.id)) {
            alert("El producto ya está en el carrito");
            return;
        }

        // Le seteo lo que ya tenía (...cart), más el nuevo ítem
        setCart([...cart, item]); 
        alert("Producto agregado al carrito");
    };

    const clearCart = () => {
        setCart([]);
    };

        const getTotalItems = () => {
        if (cart.length){
            return cart.length;
        }
    };

    const values = {
        // No hace falta poner la clave y el valor si se llaman igual, toma el mismo nombre  para ambos.    
        cart, addItem, clearCart, getTotalItems
    };

    return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};