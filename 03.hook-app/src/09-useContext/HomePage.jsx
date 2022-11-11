import { useContext } from "react"
import { UserContext } from "./context/UserContext"

const HomePage = () => {

  const { hola,  user } = useContext( UserContext )
  return (
    <>
      <div>HomePage <small>{ user?.name && user.name}</small></div>
      <p>{ hola }</p>
    </>
  )
}

export default HomePage