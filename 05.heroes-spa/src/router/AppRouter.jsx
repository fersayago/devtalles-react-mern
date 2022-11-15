import {  Route, Routes } from "react-router-dom"

import { HeroesRoutes } from "../heroes"
import { LoginPage } from "../auth"
import { Navbar } from '../ui'
import PrivateRoute from "./PrivateRoute"
import PublicRoute from "./PublicRoute"

const AppRouter = () => {
  return (
    <>

      <Routes>
        {/* Para evitar problemas de Route hay que especificar que cualquier ruta dentro del login es valida y no anidar los dos Routes. Esto es otra manera de realizar el route de childrens */}
        <Route path='login/*' element={
          <PublicRoute>
            <Routes>
              <Route path='/*' element={<LoginPage />}/>
            </Routes>
          </PublicRoute>
        }/>
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