import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignupPage from './Components/Signup'
import Login from './Components/Login'
import Home from './Components/Home'

const Paths = () => {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<SignupPage/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/home' element={<Home/>} />
  </Routes>
  </BrowserRouter>
  )
}

export default Paths