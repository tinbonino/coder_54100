import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function EjemploSimpleUseEffect() {
    const [count,setCount] = useState(0);
    const[titulo,setTitulo]=useState("");

    //useEffect para el montaje del componente

    useEffect(()=>{
        console.log("Montaje del componente! Bienvenido");
    },[])

    //useEffect para cuando se actualiza count

    useEffect(()=>{
        console.log("Se actualizó el contador");
    },[count])

    // useEffect para cuando se actualiza titulo

    useEffect(()=>{
        console.log("Se acualizó el nombre")
    },[titulo])

    //use Effect para que se ejecute siempre que se renderiza

    useEffect(()=>{
        console.log("Se renderizo el componente")
    })


  return (
    <div>
        <p>Contador: {count}</p>
        <button onClick={()=>{setCount(count=>count+1)}}>Incrementar</button>
        <button onClick={()=>{setTitulo("Juan")}}>Cambiar nombre</button>  
    </div>
  )
}

export default EjemploSimpleUseEffect