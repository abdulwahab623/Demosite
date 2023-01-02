import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import {Route, Routes } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import Navbar from './Navbar'
import Service from './Service'
import About from './About'
import Footer from './Footer'

const App = () => {
  return (
    <>
    <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/contact' element={<Contact />}></Route>
        <Route exact path='/service' element={<Service />}></Route>
        <Route exact path='/about' element={<About />}></Route>
        
      </Routes>
      <Footer />
    </>
  )
}

export default App
