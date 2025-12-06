import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Navbar from './component/Navbar'
import Footer from './component/footer'
import Contact from './component/contact'
import Project from './component/project'
import Skills from './component/Skills'
import Work from './component/Work'
import About from './component/About'

const App = () => {
  return (
    <div>
      <Navbar />
    
        <Routes>
          < Route path='/' element={<Home/>} />
          < Route path='/contact' element={<Contact/>} />
          < Route path='/project' element={<Project/>} />
          < Route path='/Skills' element={<Skills/>} />
          < Route path='/Experience' element={<Work/>} />
          < Route path='/About' element={<About/>} />
         
      </Routes>
      <Footer />
    </div>
  );
};

export default App;