import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../auth/context"

const PrivateRoute = ({ children }) => {

  // le asigno un nombre mas correcto
  const { logged } = useContext( AuthContext )

  // si esta autenticado mostramos el children, sino redireccionamos a login
  return (logged)
    ? children
    : <Navigate to='/login' />
}

export default PrivateRoute