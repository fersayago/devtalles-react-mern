import { useFetch, useCounter } from '../hooks'
// import Quote from './Quote';
// import QuoteLoader from './QuoteLoader'
import { QuoteLoader, Quote } from './'

const MultipleCustomHooks = () => {

  const {
    counter,
    incrementar,
    decrementar,
    reiniciar,
  } = useCounter(1);

  const {data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`)

  const { author, quote } = !!data && data[0]

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />

      {
        isLoading
          ? <QuoteLoader />
          : <Quote quote={ quote } author={ author } />
      }
      
      <button
        disabled={ isLoading || counter <= 1 }
        className='btn btn-primary'
        onClick={ () => decrementar() } // si invocamos incrementar vamos a enviar el evento click mientras que la funcion espera un valor
      >
        Previous quote
      </button>

      <button
        disabled={ isLoading }
        className='btn btn-primary'
        onClick={ () => incrementar() } // si invocamos incrementar vamos a enviar el evento click mientras que la funcion espera un valor
      >
        Next quote
      </button>

      <button
        disabled={ isLoading || counter === 1 }
        className='btn btn-primary'
        onClick={ () => reiniciar() } // si invocamos incrementar vamos a enviar el evento click mientras que la funcion espera un valor
      >
        First Quote
      </button>

    </>
  )
}

export default MultipleCustomHooks