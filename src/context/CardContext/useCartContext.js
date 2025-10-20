// 2) Crear el custom hook useCartContext que utilizará el contexto creado en el paso anterior.
import { useContext } from "react";
import { CartContext } from "./CartContext";

export const useCartContext = () => {
    return useContext(CartContext);

}