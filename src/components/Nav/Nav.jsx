import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CardContext/useCartContext";
import "./Nav.css";

// Componente Presentacional 
export const Nav = () =>
{
    const {getTotalItems} = useCartContext();

    return (
        <nav>   
            <ul>    
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                
                <li>
                    <Link to={"/category/drama"}>Drama</Link>
                </li>

                <li>
                    <Link to={"/category/mystery"}>Misterio</Link>
                </li> 
                <li>
                    <Link>🛒 Carrito   </Link>
                    {/* Aca no usar el thruty porque si es 0 no quiero que lo muestre */}
                    {getTotalItems() > 0 && (
                        <span className="in-cart">{getTotalItems()}</span>)}  
                </li>
            </ul>
        </nav>
    );
};
