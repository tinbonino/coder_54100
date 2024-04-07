
function Producto({nombre,precio,desc}) {
  return (
    <div className="producto">
        <h2>{nombre}</h2>
        <h3>{desc}</h3>
        <p>{precio}</p>  
    </div>
  )
}

export default Producto