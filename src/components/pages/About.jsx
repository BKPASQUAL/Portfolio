 import React from 'react'
import HeaderSection from '../About/HeaderSection'
import Navbar from '../common/Navbar'
import Education from '../About/Education'
import Footer from '../common/Footer'
import Certificate from '../About/Certificate'
 
 function About() {
   return (
     <div>
      <Navbar/>
       <HeaderSection/>
       <Education/>
       <Certificate/>
       <Footer/>
     </div>
   )
 }
 
 export default About
 