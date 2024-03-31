
// import Navbar from "./components/Navbar/Navbar";
import NavbarBoot from "./components/NavbarBoot/NavbarBoot";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
function App() {
  

  return (
    <>
     {/* <Navbar/> */}
     <NavbarBoot/>
     <ItemListContainer greeting={"Hola! Bienvenido"}/>
    </>
  )
}

export default App
