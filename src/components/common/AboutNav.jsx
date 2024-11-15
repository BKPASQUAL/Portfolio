import React, { useState, useEffect } from "react";
import "../../assets/css/Navbar.css";
import bk from "../../assets/images/bk.jpg";
import { useNavigate } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function AboutNav({ onSkillsClick, onProjectsClick }) {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const onClick = () => {
    navigate("../");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`navbar-main ${showNavbar ? "show" : "hide"}`}>
      <div
        className="navbar-left"
        onClick={scrollToTop}
        style={{ cursor: "pointer" }}
      >
        <img src={bk} alt="Logo" />
        <div className="navbar-title">
          <h1>Bawantha Kalind Pasqual</h1>
          <p>Full-Stack Developer</p>
        </div>
      </div>
      <div className="navbar-mid">
        <p onClick={onClick}>Work</p>
        <p onClick={onSkillsClick}>Education</p>
        <p onClick={onProjectsClick}>Certificates</p>
        {/* <p onClick={onExperienceClick}>Experience</p> */}
      </div>
      <div className="navbar-right">
        <a href="https://www.linkedin.com/in/bawanthapasqual/">LinkedIn</a>
        <FaLinkedin className="icon" />
        <a href="/BawanthaPasqualCVResume.pdf">Resume</a>
        <a href="https://github.com/BKPASQUAL">GitHub</a>
        <FaGithub className="icon" />
      </div>
    </div>
  );
}

export default AboutNav;
