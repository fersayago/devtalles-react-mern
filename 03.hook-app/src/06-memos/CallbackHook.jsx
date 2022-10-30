import { useState, useCallback } from "react"
import ShowIncrement from "./ShowIncrement"

const CallbackHook = () => {

  const [counter, setCounter] = useState(0)


  // guarda la funcion incluyendo el counter dentro por lo que se debe ??? sino siempre el counter sera 1
  const incrementFather = useCallback(
    () => {
      // setCounter( counter + 1 )
      setCounter((value) => value + 1)
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