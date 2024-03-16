// Selecciono los elementos del DOM

const texto=document.querySelector("#texto");
const boton=document.querySelector("#boton");

// Función que muestra el saludo

// const mostrar= ()=>{
//     texto.innerHTML="Bienvenidos a la primera clase de React"
// }

// Generar el evento para ejecutar la función

// boton.addEventListener("click",mostrar);

let opcion = confirm("¿Desea mostrar un mensaje?");
// if
// if(opcion){
//     texto.innerHTML="Este es el mensaje que usted solicitó";
// } else {
//     texto.innerHTML="Le voy a mostrar un mensaje igual por mal llevado"
// }

//ternario

opcion? texto.innerHTML="Este es el mensaje que usted solicitó":texto.innerHTML="Le muestro el mensaje igual";

//pregunta? Respuesta afirmativa : Respuesta falsa