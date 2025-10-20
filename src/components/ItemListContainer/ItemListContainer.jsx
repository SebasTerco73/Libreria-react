import { useState, useEffect} from "react";
import { ItemList } from "../ItemList/ItemList";

// 1) Componente Contenedor, maneja lógica y estado. Hace el fetch de datos y se los pasa a ItemList

export const ItemListContainer = () => {
const [products, setProducts] = useState([]);

// Uso de useEffect
// [] = Array de dependencias indica que se dispara solo al montar el componente, 
// si no se pone nada se dispara en cada renderizado,
// si tiene dependencias dentro, se dispara cuando alguna de esas dependencias cambia  
useEffect(() => {
    // Ruta relativa al archivo JSON en la carpeta public
    // El servidor de desarrollo de Vite (usado por Create React App) sirve archivos estáticos desde la carpeta public, no desde src.
    fetch('/data/products.json')
    .then((res) => { 
        if (!res.ok) {
            throw new Error('Hubo un error al cargar los productos');
        }
        return res.json();
    })
    .then((data) => {
        // Actualizar el estado con los datos obtenidos
        setProducts(data);
    })
    .catch((err) => {
        console.error(err);
    });

}, []);
    
  return (
    <section>
        <h1>Libreria</h1>
        <ItemList list={products}/>
    </section>
  );
};