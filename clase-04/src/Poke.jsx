import React, { useState,useEffect } from 'react'

function Poke() {

    const [pokemonList,setPokemonList]=useState([]);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
        .then(response=>{
            if (!response.ok){
                throw new Error("No trajo kokemone");
            }
            return response.json();
        })
        .then(data => {
            console.log(data)
            setPokemonList(data.results);
          
        })
        .catch(error =>{
            console.error("Error trayendolos:",error);
        })
      
    },[]);

    return (
        <div>
            <h2>Lista de Kokemone</h2>
            <ul>
                {pokemonList.map((pokemon,index) => (
                  <li key={index}>{pokemon.name}</li>
                ))}
            </ul>
        </div>
    )
    

}

export default Poke