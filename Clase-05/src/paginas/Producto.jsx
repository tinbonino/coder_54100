import "../styles.css"
import { Link } from "react-router-dom"
function Producto({id,nombre,precio}) {
  return (
    <Link to={`/producto/${id}`} className="card">
        <h2>{nombre}</h2>
        <h3>{precio}</h3>
    </Link>
  )
}

export default Producto