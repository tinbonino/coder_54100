import { useState } from "react"

function Renderizado() {

    const [mostrar,setMostrar]=useState(false);

    const handleClick = () => {
      setMostrar(!mostrar)
    }

    // renderizado con if con return anticipado

    const renderizarConIf= () => {
      if(mostrar){
        return <p>Este texto se muestra si el estado es true con if con return</p>
      }
      return <p>Este texto se muestra si el estado es false con if con return</p>
    };
    
  return (
    <div>
           <button onClick={handleClick}>
            {mostrar? "ocultar":"Mostrar"}
            </button> 

             {/* Renderizado con ternario */}
            {mostrar
            ? <p>Este texto se muestra si el estado es true con ternario</p>
            :<p>Este texto se muestra si el estado es false con ternario</p>}
            
            {/* Renderizado con operador lógico && */}

            {mostrar && <p>Este texto se muestra si el estado es true con operador lógico</p>}
            
            {/* Renderizado condicional con if-else en una función */}

            {(() => {
              if(mostrar){
                return <p>Este texto se muestra si el estado es true con if en el render</p>
              } else {
                return <p>Este texto se muestra si el estado es false con if en el render</p>
              }
            })()}

            {/* Renderizado condicional con función fuera del render */}

            {renderizarConIf()}
    </div>
  )
}

export default Renderizado