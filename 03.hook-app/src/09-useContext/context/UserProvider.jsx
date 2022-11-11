import { UserContext } from "./UserContext"

const user = {
  id: 123,
  name: 'Fernando Sayago',
  email: 'sayago.fernando@userProvider.com'
}

const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ hola: 'Mundo', user: user }}>
      { children }
    </UserContext.Provider>
  )
}

export default UserProvider