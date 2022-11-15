import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "../auth/context"

const PrivateRoute = ({ children }) => {

  // le asigno un nombre mas correcto
  const { logged: isLogged } = useContext( AuthContext )
  const { pathname, search} = useLocation();

  const lastPath = pathname + search
  localStorage.setItem('lastPath', lastPath);

  // si esta autenticado mostramos el children, sino redireccionamos a login
  return (isLogged)
    ? children
    : <Navigate to='/login' />
}

export default PrivateRoute