import { collection,getDocs,getFirestore } from "firebase/firestore"

import { useEffect } from "react";

function Collection() {


useEffect(() => {
  
  // Conexión a la base de datos

  const db= getFirestore();

  //Creamos referencia a la colección

  const itemCollection= collection(db,"items");

  // traemos la información

  getDocs(itemCollection).then(snapshot =>{
      snapshot.docs.map(docu=>console.log(docu.data()))
  })
  
},[])


  return (
    <div>Obteniendo una Collection</div>
  )
}

export default Collection