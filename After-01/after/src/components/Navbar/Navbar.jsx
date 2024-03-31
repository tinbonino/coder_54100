import logo from "../../assets/logo.png"
import { FaShoppingCart } from "react-icons/fa";
import "./navbar.css"
function Navbar() {
  return (
    <nav className="navbar">
        <div>
            <img src={logo} className="logo" alt="Logo"/>    
        </div>  
        <ul className="navbar-links">
            <li className="navbar-item">
                <a href="#">Inicio</a>
            </li>
            <li className="navbar-item">
                <a href="#">Productos</a>
            </li>
            <li className="navbar-item">
                <a href="#">Contacto</a>
            </li>
        </ul>
        <div className="carrito">
        <FaShoppingCart size="30px"/>
        <span className="badge">4</span>
        </div>
    </nav>
  )
}

export default Navbar