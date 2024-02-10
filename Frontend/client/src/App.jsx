import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Mainpage from './components/Mainpage'
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import LoginForm from './components/Login'
import SignUp from './components/SignUp'

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
        </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App
