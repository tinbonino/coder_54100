import { Link } from "react-router-dom"
import "../navbar.css"

function Navbar() {
  return (
 <nav className="navbar">
  <ul className="categories-navbar">
    <Link to="/category/mouse" className="category-navbar">
    Mouse
    </Link>
    <Link to="/category/teclado" className="category-navbar">
    Teclado
    </Link>
    <Link to="/category/audio" className="category-navbar">
    Audio
    </Link>
  </ul>

 </nav>
  )
}

export default Navbar