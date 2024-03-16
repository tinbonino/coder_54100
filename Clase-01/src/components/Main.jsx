import Hero from "./Hero"
import Card from "./Card"
import { useState } from "react"
function Main() {
    const [texto,setTexto] =useState(""); // lo vemos la proxima
  return (
   <>
    <h2>Main</h2>
    <Hero/>
    {/* <Card/>
    <Card/>
    <Card/>
    <Card/> */}
    <p>{texto}</p>
    <button onClick={()=>setTexto("Bienvenidos a la primera clase de React")}>Mostrar saludo</button> // lo vemos la proxima
   </>
  )
}

export default Main