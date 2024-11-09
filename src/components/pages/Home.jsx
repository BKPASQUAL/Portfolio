import React, { useRef } from 'react';
import Navbar from '../common/Navbar';
import LandingPage from './LandingPage';
import Skills from './Skills';
import Projects from '../home/projects';
import Experience from '../home/Experience';
import Footer from '../common/Footer';

function Home() {
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Navbar 
        onSkillsClick={() => scrollToSection(skillsRef)} 
        onProjectsClick={() => scrollToSection(projectsRef)} 
        onExperienceClick={() => scrollToSection(experienceRef)} 
      />
      <LandingPage />
     
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={experienceRef}>
        <Experience />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
