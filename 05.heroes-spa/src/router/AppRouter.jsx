import { Navigate, Route, Routes } from "react-router-dom"
import Loginpage from "../auth/pages/Loginpage"
import DcPage from "../heroes/pages/DcPage"
import MarvelPage from "../heroes/pages/MarvelPage"

const AppRouter = () => {
  return (
    <>
      <Routes>
        {/* <Route path='about' element={ <About/> }/> */}
        <Route path='login' element={ <Loginpage/> }/>
        <Route path='marvel' element={ <MarvelPage/> }/>
        <Route path='dc' element={ <DcPage/> }/>
        <Route path='/' element={ <Navigate to='marvel' />}/>
      </Routes>
    </>
  )
}

export default AppRouter