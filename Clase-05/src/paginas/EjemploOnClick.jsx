import { useState } from "react"


function EjemploOnClick() {
    const [info,setInfo]=useState("Click no realizado");
    
    const handleClick = () =>{
        // alert("Haz hecho click en el botón")
        setInfo("Click realizado")
        console.log("Click realizado")
    }
    return (
    <div>
        <button onClick={handleClick}>Click!</button>
        <h2>{info}</h2>
    </div>
  )
}

export default EjemploOnClick