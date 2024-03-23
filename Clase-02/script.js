// Defino un array

let nombres=["Santiago","Damian","Nancy","Javier"];

//Defino una variable para cada posición

// let estudiante1=nombres[0];
// let estudiante2=nombres[1];
// let estudiante3=nombres[2];
// let estudiante4=nombres[3];



//Desestructurando...

// let [nombre1,,,nombre4]=nombres;
//  //    0    12    3
// console.log(nombre1);
// // console.log(nombre2);
// // console.log(nombre3);
// console.log(nombre4);


// Utilizando rest

// let [ausente,...presentes]=nombres;

// console.log(ausente);
// console.log(presentes)


// desestructurando funciones

// function estudiantes(){
//     return ["Juan","Pedro","Laura","Esteban"];
// }

// let [nombre1,nombre2]=estudiantes();

// console.log(nombre1)
// console.log(nombre2)

//Desestructurando objetos

let estudiante= {
    nombre:"Jorge",
    edad:25,
    cursos:["frontend","backend"]
}


// let nombre=estudiante.nombre;
// let edad=estudiante.edad;
// let cursos=estudiante.cursos;

// console.log(nombre)
// console.log(edad)
// console.log(cursos)

// ######################################################################
// El array desestructura por posición y el objeto lo hace por propiedad
// ######################################################################


// let {nombre,edad,cursos}=estudiante

// console.log(nombre);
// console.log(edad);
// console.log(cursos);


// let {nombre:newName,edad:age,cursos:courses}=estudiante

// console.log(newName);
// console.log(age);
// console.log(courses);

let {cursos}=estudiante;

console.log(cursos)

// usamos el includes

console.log(nombres.includes("Nancy"))


Array.prototype.incluye= function(elemento){
    let array=this;

    for(let i=0;i<array.length;i++){
        if(array[i]===elemento){
            return true;
        }
    }
    return false;
}

console.log(nombres.incluye("Nancy"));


