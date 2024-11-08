import React from 'react'
import Navbar from '../common/Navbar'
import LandingPage from './LandingPage'
import Skills from './Skills'
import Projects from '../home/projects'

function Home() {
  return (
    <div>
      <Navbar/>
      <LandingPage/>
      <Skills/>
      <Projects/>
    </div>
  )
}

export default Home
