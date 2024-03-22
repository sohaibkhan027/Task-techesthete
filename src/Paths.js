import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignupPage from './Components/Signup'
import Login from './Components/Login'
import Home from './Components/Home'
import Protected from './Components/ProtectedRoute'
import Checking from './Components/Checking'
import Edit from './Components/Edit'

const Paths = () => {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<SignupPage/>} />
    <Route path='/home' element={<Protected Component = {Home}/>} />
    {/* <Route path='/home' element={<Home/>}/> */}
    <Route path='/edit' element={<Protected Component = {Edit}/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/check' element={<Checking/>} />
  </Routes>
  </BrowserRouter>
  )
}

export default Paths