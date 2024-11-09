import React from "react";
import "../../assets/css/HeaderSection.css";
import Navbar from "../common/Navbar";
import { useNavigate } from "react-router-dom";

function HeaderSection() {
    const naviagte = useNavigate();

    const onClick = () => {
        naviagte("/");
    }
  return (
    <>
      {/* <Navbar/> */}
      <div className="HeaderSection-main">
        <div className="HeaderSection-left"></div>
        <div className="HeaderSection-right">
          <h1>About Me</h1>
          <p>
            I am Bawantha Kalind Pasqual, a dedicated Full-Stack Developer with
            a strong foundation in web development technologies like React,
            Node.js, and JavaScript. I am skilled in creating responsive,
            user-friendly applications and am passionate about problem-solving
            and innovation. Alongside my technical skills, I have a background
            in teamwork and leadership, having served as the Assistant Secretary
            of the Prefect Board and captain of the cricket team at Richmond
            College. As an active member of NSBM Green University’s cricket
            club, where I serve as Secretary, I am always eager to take on new
            challenges and grow both technically and personally.
          </p>
          <button onClick={onClick}>Work</button>
        </div>
      </div>
    </>
  );
}

export default HeaderSection;
