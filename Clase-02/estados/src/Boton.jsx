import React from 'react'

function Boton({count,setCount}) {
  return (
    <button onClick={() => setCount(count + 5)}>
    count is {count}
  </button>
  )
}

export default Boton