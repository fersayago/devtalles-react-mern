import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/context";

const Navbar = () => {

  const { user } = useContext(AuthContext)
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login', {
      // El replace evita que la persona pueda regresar al historial anterior por que lo que hacemos es reemplazar
      replace: true
    })
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p2">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            to="/marvel"
            className={({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : ''}`}
          >
            Marvel
          </NavLink>

          <NavLink
            to="/dc"
            className={({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : ''}`}
          >
            DC
          </NavLink>
          
          <NavLink
            to='/search'
            className={({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : ''}`}
          >
            Search
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-primary">
            {
              user?.name
            }
          </span>
          <button
            className="nav-item nav-link btn"
            onClick={handleLogout}
          >
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};


export default Navbar;