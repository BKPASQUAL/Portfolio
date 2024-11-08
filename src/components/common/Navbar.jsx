import React, { useState, useEffect } from "react";
import "../../assets/css/Navbar.css";
import bk from "../../assets/images/bk.jpg";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  return (
    <div className={`navbar-main ${showNavbar ? "show" : "hide"}`}>
      <div className="navbar-left">
        <img src={bk} alt="Logo" />
        <div className="navbar-title">
          <h1>Bawantha Kalind Pasqual</h1>
          <p>Full-Stack Developer</p>
        </div>
      </div>
      <div className="navbar-mid">
        <p>About</p>
        <p>Skills</p>
        <p>Projects</p>
        <p>Experience</p>
      </div>
      <div className="navbar-right">
        <p>LinkedIn</p>
        <p>Resume</p>
      </div>
    </div>
  );
}

export default Navbar;
