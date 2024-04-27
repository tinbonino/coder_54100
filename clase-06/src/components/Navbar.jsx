import { useContext } from "react"
import ThemeContext from "../context"

function Navbar() {
    const {tema, handleCambiarTema} = useContext(ThemeContext);
  return (
    <div>
        <button onClick={handleCambiarTema} style={{background:tema.background,color:tema.font}}>Cambiar tema</button>
    </div>
  )
}

export default Navbar