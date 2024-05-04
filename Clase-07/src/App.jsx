
import './App.css'
import {doc,getDoc,getFirestore} from "firebase/firestore";


function App() {

// establezco la conexión con la base de datos
  
const db=getFirestore();

// Creo la referencia al documento

  const prodRef=doc(db,"items","ZqaveDjtTxqcIimfrBZY");


  // Traigo la información

  getDoc(prodRef).then(snapshot=> console.log(snapshot.data()))


  return (
    <>
      <h2>Obteniendo un documento</h2>
    </>
  )
}

export default App
