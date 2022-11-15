import {  Route, Routes } from "react-router-dom"

import { HeroesRoutes } from "../heroes"
import { LoginPage } from "../auth"
import { Navbar } from '../ui'
import PrivateRoute from "./PrivateRoute"

const AppRouter = () => {
  return (
    <>

      <Routes>
        <Route path='login' element={ <LoginPage/> }/>
        {/* Mediante el uso de Higher Order Components asignamos a las rutas de heroe como privadas */}
        <Route path='/*' element={
          <PrivateRoute>
            <HeroesRoutes />
          </PrivateRoute>
        } />
        {/* <Route path='/*' element={ <HeroesRoutes /> } /> */}
      </Routes>
    </>
  )
}

export default AppRouter