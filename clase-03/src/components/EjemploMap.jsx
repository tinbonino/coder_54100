
function EjemploMap() {
    let personas=[
        {
            nombre:"Juan",
            apellido:"Perez"
        },
        {
            nombre:"Laura",
            apellido:"Gonzalez"
        },
        {
            nombre:"Fernando",
            apellido:"Ruiz"
        },
        {
            nombre:"Loli",
            apellido:"Pereyre"
        },
        {
            nombre:"Hubert",
            apellido:"Renwerwerw"
        }
    ]
  return (
    <div>
        <ul>
            {personas.map(persona=><li>{persona.nombre} {persona.apellido}</li>)}
        </ul>
    </div>
  )
}

export default EjemploMap