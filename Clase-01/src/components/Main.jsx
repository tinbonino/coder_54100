import Hero from "./Hero"
import Card from "./Card"
import Texto from "./Texto";
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
    
    <button onClick={()=>setTexto("Bienvenidos a la segunda clase de React")}>Mostrar saludo</button> // lo vemos la proxima
    <Texto texto={texto} nombre="Juan" apellido="Morales"/>
    <Texto texto={texto} nombre="Sebastian" apellido="Gonzalez"/>
    <Texto texto={texto} nombre="Fernanda" apellido="Perez"/>
    <Texto texto={texto} nombre="Laura" apellido="Garcia"/>
   </>
  )
}

export default Main