import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Footer from './componets/Footer'
import Navbar from './componets/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Course from './pages/Course'
import Home from './pages/Home'
import Signup from './pages/Signup'

function App() {


  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/courses' element={<Course />} />

        <Route path='/signup' element={<Signup />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App