import { useState } from "react"
import { useForm } from "../../hooks"

const TodoAdd = ({handleNewTodo}) => {

  const { description, onResetForm, onInputChange } = useForm({
    description: ''
  })

  const onFormSubmit =  (e) => {
    e.preventDefault()

    if (description.length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description: description,
    }

    handleNewTodo(newTodo)
    onResetForm()
  }

  return (
    <form onSubmit={ onFormSubmit }>
      <input 
        type="text"
        placeholder='¿Que hay que hacer?'
        className='form-control'
        name='description'
        value={ description }
        onChange={onInputChange}
      />
      <button
        type='submit'
        className='btn btn-outline-primary mt-1'
      >
        Agregar
      </button>
    </form>
  )
}

export default TodoAdd