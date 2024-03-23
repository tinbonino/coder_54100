import "./navbar.css"
import logo from "../../assets/logo.png"
import { FaShoppingCart } from "react-icons/fa";
function Navbar() {
  return (
    <div>
        <nav className="navbar">
            <div>
                <img src={logo} className="logo" alt="" />
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
                <span className="badge">2</span>
            </div>
        </nav>
    </div>
  )
}

export default Navbar