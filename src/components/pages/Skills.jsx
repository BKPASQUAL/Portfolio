import React from "react";
import Marquee from "react-fast-marquee";
import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaServer,
  FaJava,
  FaAws,
} from "react-icons/fa";
import {
  SiRedux,
  SiSequelize,
  SiMysql,
  SiC,
  SiTailwindcss,
} from "react-icons/si";
import "../../assets/css/Skills.css";

function Skills() {
  const skills = [
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "RTK Query", icon: <SiRedux /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express", icon: <FaServer /> },
    { name: "Sequelize ORM", icon: <SiSequelize /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Java", icon: <FaJava /> },
    { name: "C", icon: <SiC /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "AWS", icon: <FaAws /> },
    { name: "MongoDB", icon: <FaDatabase /> },
  ];

  return (
    <>
      <div className="skills-title">My Skills</div>
      <div className="skills-main">
        <Marquee speed={100}>
          {skills.map((skill, index) => (
            <div key={index} className="skills-con">
              <span className="icon">{skill.icon}</span>
              <span>{skill.name}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </>
  );
}

export default Skills;
