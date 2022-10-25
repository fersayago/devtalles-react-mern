import { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({ onNewCategory }) => {

  const [ inputValue, setInputValue ] = useState('')

  // al apretar el boton corroboramos que el inputValue tenga valor
  // y una vez agregado al estado de categorias, vaciamos el input
  const onSubmit = (event) => {
    event.preventDefault()
    inputValue !== '' &&
    onNewCategory(inputValue.trim())
    setInputValue('');
  }

  const onInputChange = (event) => {
    setInputValue( event.target.value )
  }

  return (
    <>
      <form onSubmit={ onSubmit } aria-label='form'>
        <input
          type='text'
          placeholder='Buscar gifs'
          value={ inputValue }
          onChange={ onInputChange }
        />
      </form>
    </>
  )
}

AddCategory.PropTypes = {
  onNewCategory: PropTypes.func.isRequired
}

export default AddCategory