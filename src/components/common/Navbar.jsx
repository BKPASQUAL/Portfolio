import React, { useState, useEffect } from "react";
import "../../assets/css/Navbar.css";
import bk from "../../assets/images/bk.jpg";
import { useNavigate } from "react-router-dom";

function Navbar({ onSkillsClick, onProjectsClick, onExperienceClick }) {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false); // Hide navbar when scrolling down
      } else {
        setShowNavbar(true);  // Show navbar when scrolling up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const onClick = () => {
    navigate("./about")
  }

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`navbar-main ${showNavbar ? "show" : "hide"}`}>
      <div className="navbar-left" onClick={scrollToTop} style={{ cursor: 'pointer' }}>
        <img src={bk} alt="Logo" />
        <div className="navbar-title">
          <h1>Bawantha Kalind Pasqual</h1>
          <p>Full-Stack Developer</p>
        </div>
      </div>
      <div className="navbar-mid">
        <p onClick={onClick}>About</p>
        <p onClick={onSkillsClick}>Skills</p>
        <p onClick={onProjectsClick}>Projects</p>
        <p onClick={onExperienceClick}>Experience</p>
      </div>
      <div className="navbar-right">
        <p>LinkedIn</p>
        <p>Resume</p>
        <p>GitHub</p>
      </div>
    </div>
  );
}

export default Navbar;
