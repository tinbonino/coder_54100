import { useState } from 'react'
import Header from './components/Header'
import Principal from './components/Principal'
import Productos from './components/Productos'
import Producto from './components/Producto'
import EjemploUseRef from './components/EjemploUseRef'
EjemploUseEffect
import './App.css'
import EjemploUseEffect from './components/EjemploUseEffect'
import EjemploSimpleUseEffect from './components/EjemploSimpleUseEffect'
import EjemploMap from './components/EjemploMap'
function App() {


  return (
    <>
      <Header/>
      <Principal>
        <Productos>
            <Producto nombre="Heladera" precio={150000} desc="Heladera con freeze"/>
            <Producto nombre="PS5" precio={400000} desc="Nuevita con jostin"/>
            <Producto nombre="TV Smart" precio={80000} desc="con netfli"/>
        </Productos>
        <EjemploUseRef/>
        <EjemploUseEffect/>
        <EjemploSimpleUseEffect/>
        <EjemploMap/>
      </Principal>

   
    </>
  )
}

export default App
