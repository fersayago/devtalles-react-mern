import { Navigate, Route, Routes } from "react-router-dom"
import HomePage from "./HomePage"
import LoginPage from "./LoginPage"
import AboutPage from "./AboutPage"
import Navbar from "./Navbar"

const MainApp = () => {
  return (
    <>
      <div>MainApp</div>
      <Navbar />
      <hr />


      <Routes>
        <Route path='/' element={ <HomePage/> } />
        <Route path='about' element={ <AboutPage/> } />
        <Route path='login' element={ <LoginPage/> } />
        {/* Usamos un wildcard en caso de que no se encuentre el path */}
        {/* <Route path='/*' element={ <LoginPage/> } /> */}
        {/* Usamos un wildcard para redireccionar a dond qeuramos con el Navigate */}
        <Route path='/*' element={ <Navigate to='/'/> } />
      </Routes>
    </>
  )
}

export default MainApp