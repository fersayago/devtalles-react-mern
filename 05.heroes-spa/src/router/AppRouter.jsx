import { Navigate, Route, Routes } from "react-router-dom"

import { MarvelPage, DcPage } from './../heroes'
import { LoginPage } from "../auth"
import { Navbar } from '../ui'

const AppRouter = () => {
  return (
    <>

      <Navbar/>
      <Routes>
        <Route path='login' element={ <LoginPage/> }/>
        <Route path='marvel' element={ <MarvelPage/> }/>
        <Route path='dc' element={ <DcPage/> }/>
        <Route path='/' element={ <Navigate to='marvel' />}/>
      </Routes>
    </>
  )
}

export default AppRouter