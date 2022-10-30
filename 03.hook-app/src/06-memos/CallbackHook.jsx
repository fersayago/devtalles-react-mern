import { useState, useCallback } from "react"
import ShowIncrement from "./ShowIncrement"

const CallbackHook = () => {

  const [counter, setCounter] = useState(0)


  // guarda la funcion incluyendo el counter dentro por lo que se debe ??? sino siempre el counter sera 1
  const incrementFather = useCallback(
    // recibe el argumento value del showIncrement donde se implementa la función
    (value) => {
      // setCounter( counter + 1 )
      setCounter((count) => count + value)
    },
    [],
  )
  

  // const incrementFather = () => {
  //   setCounter ( counter + 1 )
  // }

  return (
    <>
      <h1>useCallback Hook: { counter }</h1>
      <hr />

      <ShowIncrement increment={ incrementFather }/>
    </>
  )
}

export default CallbackHook