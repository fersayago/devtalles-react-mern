import { useReducer } from "react"
import { AuthContext } from "./"
import { authReducer } from "./"

const initialState = {
  logged: false,
}

const AuthProvider = ({ children }) => {
  
  const [ authState, dispatch ] = useReducer( authReducer, initialState)

  return (
    <AuthContext.Provider value={{}}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthProvider