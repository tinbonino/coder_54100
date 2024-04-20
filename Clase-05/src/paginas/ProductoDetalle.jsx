import { useParams } from "react-router-dom"
import { productos } from "../productos"
function ProductoDetalle() {
    const {id} =useParams(); // Obtiene el id de los parametros enviados en la ruta
    const producto = productos.find(prod =>prod.id === parseInt(id));

    if(!producto){
        return <h2>Producto no encontrado</h2>
    }
  return (
    <div>
        <h2>Detalle del Producto</h2>
        <h3>ID: {producto.id}</h3>
        <h3>Nombre: {producto.nombre}</h3>
        <h3>Precio: {producto.precio}</h3>
    </div>
  )
}

export default ProductoDetalle
