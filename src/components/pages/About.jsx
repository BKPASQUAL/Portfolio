import React, { useRef } from "react";
import HeaderSection from "../About/HeaderSection";
import Education from "../About/Education";
import Footer from "../common/Footer";
import Certificate from "../About/Certificate";
import AboutNav from "../common/AboutNav";

function About() {
  const educationRef = useRef(null);
  const certificateRef = useRef(null);

  const handleScrollToEducation = () => {
    educationRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToCertificate = () => {
    certificateRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <AboutNav
        onSkillsClick={handleScrollToEducation}
        onProjectsClick={handleScrollToCertificate}
      />
      <HeaderSection />
      <div ref={educationRef}>
        <Education />
      </div>
      <div ref={certificateRef}>
        <Certificate />
      </div>
      <Footer />
    </div>
  );
}

export default About;
