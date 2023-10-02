import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SkillSection from './components/SkillSection'
import About from './components/About'
import Projects from './components/Projects'
import Award from './components/Award'

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <SkillSection/>
    <Projects/>
    <Award/>
    </>
  )
}

export default App