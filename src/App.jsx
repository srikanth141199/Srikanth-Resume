import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SkillSection from './components/SkillSection'
import About from './components/About'
import Projects from './components/Projects'

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <SkillSection/>
    <About/>
    <Projects/>
    </>
  )
}

export default App