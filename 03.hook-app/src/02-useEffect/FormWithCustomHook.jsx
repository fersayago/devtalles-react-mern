import useForm from '../hooks/useForm';
import Message from './Message';

const FormWithCustomHook = () => {

  const {
    username,
    email,
    password,
    formState,
    onInputChange,
    onResetForm
  } = useForm({
    username: '',
    email: '',
    password: ''
  });

  // para evitar esta desestructuración estamos devolviendo los campos individualmente en el hook useForm
  //const { username, email, password } = formState

  return (
    <>
      <h1>Formulario con custom hook</h1>
      <hr />

      <input
        type="text"
        className='form-control mt-2'
        placeholder='Usuario'
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

      <input
        type="password"
        className='form-control mt-2'
        placeholder='Contraseña'
        name='password'
        value={password}
        onChange={onInputChange}
      />

      <div className='d-grid'>
        <button
          className='btn btn-primary mt-2'
          onClick={onResetForm}
        >Borrar</button>
      </div>

      {
        username === 'usuarioExistente' &&
        <Message />
      }
    </>
  )
}

export default FormWithCustomHook