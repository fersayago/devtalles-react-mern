import { useContext } from "react"
import { UserContext } from "./context/UserContext"

const initialUser = {
  id: 123,
  name: 'Fernando Sayago',
  email: 'sayago.fernando@userProvider.com'
}

const LoginPage = () => {

  const { user, setUser } = useContext( UserContext )

  const establecerUsuario = () => {
    setUser(initialUser)
  }

  return (
    <>
      <div>LoginPage</div>

      <pre>
        { JSON.stringify( user, null, 3 )}
      </pre>

      <button
        className="btn btn-primary"
        onClick={establecerUsuario}
      >
        Establecer usuario
      </button>
    </>
  )
}

export default LoginPage