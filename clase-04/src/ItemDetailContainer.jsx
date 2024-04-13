import { useState,useEffect } from "react"
import ItemDetail from "./ItemDetail"


function ItemDetailContainer() {
    const [itemInfo,setItemInfo]= useState(null);

    useEffect(() => {
      fetch("https://fakestoreapi.com/products/5")
        .then(response=>{
            if(!response.ok){
                throw new Error("No pudimos traer la información");
            }
            return response.json();
        })
        .then(data=>{
            setItemInfo(data);
        })
        .catch(error=>{
            console.error("Error:",error)
        });
    },[])

  return (
    <div>
        <h1>Detalle del producto</h1>
        {itemInfo && <ItemDetail item={itemInfo}/>}
    </div>
  )
}

export default ItemDetailContainer