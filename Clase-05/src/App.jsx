
import { BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css'
import Home from "./paginas/Home"
import Blog from "./paginas/Blog"
import Layout from "./paginas/Layout"
import Productos from "./paginas/Productos"
import NoPage from "./paginas/NoPage"
import ProductoDetalle from "./paginas/ProductoDetalle"
import Eventos from "./paginas/Eventos"
function App() {
 

  return (
    <>
      <BrowserRouter>

          <Routes>
              <Route exact path="/" element={<Layout/>} >
                <Route index element={<Home/>} />
                <Route path="blog" element={<Blog/>} />
                <Route path="/producto/:id" element={<ProductoDetalle/>}/>
                <Route path="productos" element={<Productos/>} />
                <Route path="eventos" element={<Eventos/>} />
                <Route path="*" element={<NoPage/>} />
              </Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
