import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Boton from './Boton'

function App() {
  const [count, setCount] = useState(0)  // Desestructuramos un array

 
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
       <Boton count={count} setCount={setCount} nombre="Contador"/>
       <Boton count={count} setCount={setCount} />
       <Boton count={count} />
       <Boton count={count} />
       
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
