import { Link } from "react-router-dom";
import "./Footer.css";

// Componente Presentacional
export const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <p>© 2025</p>
        </div>
        <div className="footer-section">
            <p>Proyecto React - Libreria</p>
        </div>
      </div>
    </footer>
  );
};
