import { useReducer } from "react"
import { types } from "../types/types"
import { AuthContext } from "./"
import { authReducer } from "./"

const init = () => {
  const user = JSON.parse( localStorage.getItem('user') );

  // si el usuario existe logged en true
  return {
    logged: !!user,
    user: user
  }
}

const AuthProvider = ({ children }) => {
  
  // enviamos un objeto vacio ya que la función de inicialización sera la que indique el usuario y su estado
  const [ authState, dispatch ] = useReducer( authReducer, {}, init)

  const handleLogin = ( name = '' ) => {

    const user = {
      id: 'ABC',
      name
    }

    const action = {
      type: types.login,
      payload: user
    }

    localStorage.setItem( 'user', JSON.stringify(user) );

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