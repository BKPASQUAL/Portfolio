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
      <Projects/>
      <Skills/>

    </div>
  )
}

export default Home
