import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/login">Login</Link>
      {/* Los Link se pueden estilizar como <a> por que react genera a con los Link */}
    </>
  )
}

export default Navbar