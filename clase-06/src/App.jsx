import { useState } from 'react'

import Navbar from './components/Navbar'

import Layout from './components/Layout'
import Body from './components/Body.jsx'
import ThemeContext, {themes} from './context'
import Renderizado from './components/Renderizado.jsx'

import './App.css'

function App() {

  const [tema,setTema] = useState(themes.claro);

  const handleCambiarTema = () => {
    tema === themes.oscuro ? setTema(themes.claro) : setTema(themes.oscuro);
  };

  return (
  <div className='App'>
    <ThemeContext.Provider value={{tema,handleCambiarTema}}>
        <Layout>
          <Navbar/>
          <Body/>
          <Renderizado/>
        </Layout>
    </ThemeContext.Provider>
  </div>
  )
}

export default App
