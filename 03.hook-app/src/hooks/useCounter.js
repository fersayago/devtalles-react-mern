import { useState } from "react";


const useCounter = ( initialValue = 10 ) => {

  const [counter, setCounter] = useState(initialValue);

  const incrementar = ( value = 1 ) => {
    setCounter((current) => current + value);
  }

  const decrementar = ( value = 1 ) => {
    counter > 0 &&
    setCounter((current) => current - value);
  }
  
  const reiniciar = () => {
    setCounter(initialValue);
  }

  return {
    counter: counter,
    incrementar,
    decrementar,
    reiniciar,
  }
}

export default useCounter;