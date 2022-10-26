import useCounter from "../hooks/useCounter";

const CounterWithCustomHook = () => {

  const { counter } = useCounter();

  return (
    <>
      <h1>Counter with Hook: { counter }</h1>

      <button className='btn btn-primary'>+1</button>
      <button className='btn btn-primary'>Reset</button>
      <button className='btn btn-primary'>-1</button>
    </>
  )
}

export default CounterWithCustomHook