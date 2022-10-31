import { useState } from "react"
import { useCounter } from "../hooks"
import Small from "./Small"

const Memorize = () => {

  const {counter, incrementar} = useCounter()
  const [show, setShow] = useState(true)

  return (
    <>
      <h1>Counter: <Small value={ counter } /></h1>
      <hr />

      <button
        className="btn btn-primary"
        onClick={ () =>  incrementar() }
      >
        +1
      </button>

      <button
        className="btn btn-outline-primary"
        onClick={ () => setShow(!show)}
      >
        Show/Hide
      </button>
    </>
  )
}

export default Memorize