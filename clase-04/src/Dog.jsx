import { useState } from "react"
function Dog() {
    const [dogImageUrl,setDogImageUrl]=useState("");

    const fetchDogImage=()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response=>{
            console.log(response)
            if(!response.ok){
                throw new Error("No pudimos traer la imagen");
            }
            return response.json();
        })
        .then(data=>{
            console.log(data);
            setDogImageUrl(data.message);
        })
        .catch(error =>{
            console.error("Error haciendo el fetch:",error);
        });
    }
  return (
    <div>
        <h1>Imagen de perro</h1>
        <button onClick={fetchDogImage}>Ver perro</button>
        {dogImageUrl && <img src={dogImageUrl}/>}
       {/* false o true              true
                   false o true */}
    </div>
  )
}

export default Dog