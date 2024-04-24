
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
function App() {
 

  return (
   <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<ItemListCointaner saludo="Nuestros Productos" />} />
      <Route path="/category/:idCategory" element={<ItemListCointaner saludo="Nuestros Productos"/>} />
      <Route path="/detail/:idProduct" element={<ItemDetailContainer/>} />

    </Routes>
   </BrowserRouter>
  )
}

export default App
