import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
// import Button from 'react-bootstrap/Button'
import Navber from './Pages/Share/Navber'
import Register from './Pages/Login/Register'
import Additems from './Pages/Additems/Additems'
import Allitems from './Pages/AllItems/Allitems'
import Myitems from './Pages/Myitems/Myitems'
import Footer from './Pages/Footer/Footer'
import Notfound from './Pages/Notfound/Notfound'

const App = () => {
  return (
    <div>
      <Navber></Navber>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="additems" element={<Additems />} />
        <Route path="/allitems" element={<Allitems />} />
        <Route path="myitems" element={<Myitems />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App