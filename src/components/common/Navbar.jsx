import React from "react";
import "../../assets/css/Navbar.css";
import bk from "../../assets/images/bk.jpg";

function Navbar() {
  return (
    <div className="navbar-main">
      <div className="navbar-left">
        <div className="landingPage-logo">
          <img src={bk} alt="Logo" /> {/* Display the logo next to the name */}
        </div>
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
