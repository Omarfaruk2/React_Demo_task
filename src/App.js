import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Button from 'react-bootstrap/Button'
import Navber from './Pages/Share/Navber'

const App = () => {
  return (
    <div>
      <Navber></Navber>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App