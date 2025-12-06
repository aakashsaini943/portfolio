import React from 'react'
import Hero from '../component/hero'
import About from '../component/About'
import Skills from '../component/Skills'
import Project from '../component/project'
import Work from '../component/Work'
import Contact from '../component/contact'


const Home = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Skills/>
      <Project/>
      <Work/>
      <Contact/>
    </div>
  );
};

export default Home;