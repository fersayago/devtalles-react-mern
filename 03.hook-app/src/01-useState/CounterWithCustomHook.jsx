import useCounter from "../hooks/useCounter";

const CounterWithCustomHook = () => {

  const {
    counter,
    incrementar,
    decrementar,
    reiniciar
  } = useCounter();

  return (
    <>
      <h1>Counter with Hook: { counter }</h1>

      <button className='btn btn-primary' onClick={ () => incrementar(2) }> +1 </button>
      <button className='btn btn-primary' onClick={ reiniciar }> Reset </button>
      <button className='btn btn-primary' onClick={ () => decrementar(2) }> -1 </button>
    </>
  )
}

export default CounterWithCustomHook