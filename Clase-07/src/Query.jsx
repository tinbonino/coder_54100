import { collection,getDocs,getFirestore,query,where } from "firebase/firestore";


function Query() {

    const db=getFirestore();

    const refItems= collection(db,"items");
    
    const q= query(refItems, where("price","<",1500));

    getDocs(q).then(snapshot =>{
        if(snapshot.size===0) {
            console.log("No hay resultados para esa búsqueda");
            
        } else {

            console.log(snapshot.docs.map(produ=>console.log(produ.data())))
        }
    })

  return (
    <div>Query</div>
  )
}

export default Query