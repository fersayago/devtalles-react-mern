import { useRef } from "react"


const FocusScreen = () => {

  const inputRef = useRef();

  const onClick = () => {
    inputRef.current.select();
  }

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input
        ref={ inputRef } // guardamos la referencia al input en la constante inputRef mediante el hook useRef
        className="form-control"
        type="text"
        placeholder="Ingrese su nombre"
      />

      <button
        className="btn btn-primary mt-2"
        onClick={ onClick }
      >
        Set Focus
      </button>
    </>
  )
}

export default FocusScreen