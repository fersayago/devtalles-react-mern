import { useState } from 'react'
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {
  
  const [ counter, setCounter ] = useState(value);

  const handlePlusOne = (e) => setCounter( counter + 1 );

  const handleMinusOne = (e) => setCounter( counter -1 );

  const handleReset = (e) => setCounter( value );

  return(
    <>
      <h1>CounterApp</h1>
      <h2>{ counter }</h2>

      <button onClick={handleMinusOne}>
        -1
      </button>
      <button onClick={handlePlusOne}> {/* (event) => handlePlusOne(event) */}
        +1
      </button>
      <button onClick={handleReset}>
        Reset
      </button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
}

export default CounterApp;