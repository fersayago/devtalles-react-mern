import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../auth"

const PublicRoute = ({ children }) => {

  const { logged: isLogged } = useContext( AuthContext )

  return (!isLogged)
    ? children
    : <Navigate to='/marvel' />
}

export default PublicRoute