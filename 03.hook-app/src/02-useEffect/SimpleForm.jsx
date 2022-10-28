import React, { useEffect, useState } from 'react'
import Message from './Message';

const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: 'usuarioPrueba',
    email: 'correo@prueba.com',
  })

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [ name ]: value
    })
  }

  

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />

      <input
        type="text"
        className='form-control mt-2'
        placeholder='Username'
        name='username'
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className='form-control mt-2'
        placeholder='Correo'
        name='email'
        value={email}
        onChange={onInputChange}
      />

      {
        username === 'usuarioExistente' &&
        <Message />
      }
    </>
  )
}

export default SimpleForm