import { useState } from "react"
import { useRef } from "react"

function EjemploUseRef() {
    const [count,setCount]=useState(0); // cuenta las veces que clickeo el boton
    const renderCount=useRef(0); // cuenta las veces que se renderiza el componente
    // const [countRender,setCountRender]=useState(0);


    // setCountRender(countRender=>countRender+1); // genera un bucle infinito porque cada vez que actualizo el estado vuelvo a renderizar y eso hace que se actualice el estado.

    //Usamos useRef para contar los renders, porque el no fuerza el renderizado del componente. Solo se realiza cuando se actualiza un estado o cambia una prop.
    
    renderCount.current++;

  return (
    <div>
        <p>contador: {count}</p>
        <button onClick={()=>setCount(count=>count+1)}>Incrementar</button>
        <button onClick={()=>setCount(count=>count+5)}>+5</button>
        <button onClick={()=>setCount(count=>count-1)}>restar</button>
        <p>Esta es la cantidad de veces que se renderizó:{renderCount.current} </p>
    
    </div>
  )
}

export default EjemploUseRef