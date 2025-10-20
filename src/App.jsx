import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Nav } from './components/Nav/Nav';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CardContext/CartProvider';
import { Footer } from './components/Footer/Footer';

function App() {

  return (
    <> 
      <BrowserRouter>
        <CartProvider>
          {/* Nav Fuera del routes porque es un componente persistente, no cambia al navegar (no se renderiza una ruta) */}
          <Nav/> 
          <Routes>
            <Route path='/' element={ <ItemListContainer/> }/>
            <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
          </Routes>
        </CartProvider>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App
