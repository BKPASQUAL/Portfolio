import React from "react";
import "../../assets/css/LandingPage.css";
import Navbar from "../common/Navbar";

function LandingPage() {
  return (
    <>
      <Navbar />
      <div className="landingPage-main">
        <div className="landingPage-left">
         
            <h1>I'M Bawantha Pasqual</h1>
            <p>
              Full-stack developer skilled in React, Node.js, Express,
              Sequelize, MySQL, JavaScript, and AWS.
            </p>
            <button>About Me </button>
        </div>

        <div className="landingPage-right"></div>
      </div>
    </>
  );
}

export default LandingPage;
