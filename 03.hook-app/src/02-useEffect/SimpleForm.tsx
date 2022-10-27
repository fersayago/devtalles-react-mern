import React, { useEffect, useState } from 'react'

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

  useEffect(() => {
    console.log('useEffect')
  });

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
    </>
  )
}

export default SimpleForm