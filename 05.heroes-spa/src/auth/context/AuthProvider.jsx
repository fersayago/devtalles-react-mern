import { useReducer } from "react"
import { types } from "../types/types"
import { AuthContext } from "./"
import { authReducer } from "./"

const initialState = {
  logged: false,
}

const AuthProvider = ({ children }) => {
  
  const [ authState, dispatch ] = useReducer( authReducer, initialState)

  const handleLogin = ( name = '' ) => {
    const action = {
      type: types.login,
      payload: {
        id: 'ABC',
        name: name
      }
    }

    dispatch( action )
  }

  return (
    <AuthContext.Provider value={{
      ...authState,
      login: handleLogin
    }}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthProvider