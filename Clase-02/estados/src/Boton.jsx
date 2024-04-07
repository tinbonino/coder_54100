import React from 'react'

function Boton({count,setCount,nombre}) {
  return (
  <>
  <h2>{nombre}</h2>
  <button onClick={() => setCount(count + 1)}>
    count is {count}
  </button>
  </>

  )
}

export default Boton