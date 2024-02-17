import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Mainpage from './components/Mainpage'
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import LoginForm from './components/Login'
import SignUp from './components/SignUp'
import AdminLogin from './components/AdminLogin'
import Helpothers from './components/Helpothers'
import Otpinput from './components/Otpinput'
import NearHospitals from './components/NearHospitals'

function App() {
 

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Mainpage/>}></Route>
          <Route path='/help'>Hello this help page</Route>
          <Route path='/login' element={<LoginForm/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/mZCRAFS816oegLYamoAgH3CeT7ipAljDByWKxD9BOipIxE5lVL' element={<AdminLogin/>}></Route>
          <Route path='/help-others' element={<Helpothers/>}></Route>
          <Route path='/hospital-near-me' element={<NearHospitals/>}></Route>
          <Route path='/medical-emergency-to' element={<Otpinput/>}></Route>
        </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App;
