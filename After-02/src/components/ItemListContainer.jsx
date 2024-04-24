import { useEffect,useState } from "react";

import getProducts from "../data/getProducts";
import { useParams } from "react-router-dom";

import "../itemListContainer.css";



function ItemListContainer({saludo}) {
    const [products,setProducts] = useState([]);
    const {idCategory} =useParams();

    useEffect(() => {
        getProducts
        .then((respuesta) => {
          if(idCategory){
            const newProducts = respuesta.filter((producto) => producto.category===idCategory)
            setProducts(newProducts);
          } else {
            setProducts(respuesta);
          }
        })
        .catch(error =>console.error(error))
      
    },[idCategory])
  return (
    <div className="item-list-container">
        <h2 className="title-items">{saludo}</h2>
        <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer

