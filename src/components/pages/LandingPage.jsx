import React from "react";
import "../../assets/css/LandingPage.css";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const naviagte = useNavigate();

  const onClick = () => {
    naviagte("./about")
  };
  return (
      <div className="landingPage-main">
        <div className="landingPage-left">
         
            <h1>I'M Bawantha Pasqual</h1>
            <p>
              Full-stack developer skilled in React, Node.js, Express,
              Sequelize, MySQL, JavaScript, and AWS.
            </p>
            <button onClick={onClick}>About Me </button>
        </div>

        <div className="landingPage-right">
            <div></div>
        </div>
      </div>
  );
}

export default LandingPage;
