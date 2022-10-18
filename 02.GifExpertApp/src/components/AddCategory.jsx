import { useState } from 'react'

const AddCategory = () => {

  const [ inputValue, setInputValue ] = useState('House of the Dragon')

  const onSubmit = (event) => {
    event.preventDefault()
  }

  const onInputChange = (event) => {
    setInputValue( event.target.value )
  }

  return (
    <>
      <form onSubmit={ onSubmit }>
        <input
          type='text'
          placeholder='Buscar gifs'
          value={ inputValue }
          onChange={ onInputChange }
        />

        <button>Agregar</button>
      </form>
    </>
  )
}

export default AddCategory