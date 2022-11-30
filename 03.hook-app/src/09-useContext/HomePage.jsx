import { useContext } from "react"
import { UserContext } from "./context/UserContext"

const HomePage = () => {

  const { hola, user } = useContext( UserContext )
  return (
    <>
      <div>HomePage <small>{ user?.name && user.name}</small></div>
      <p>{ hola }</p>

      <pre aria-label='pre'>
        { JSON.stringify( user, null, 3 ) }
      </pre>
    </>
  )
}

export default HomePage