import React from "react";
import Marquee from "react-fast-marquee";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
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
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

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
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 2 } },
        hidden: { opacity: 0, y: 50 },
      }}
    >
      <motion.div className="skills-title">
        My Skills
      </motion.div>
      <div className="skills-main">
        <Marquee speed={100}>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skills-con"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 2,
                delay: index * 0.1,
              }}
            >
              <span className="icon">{skill.icon}</span>
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </Marquee>
      </div>
    </motion.div>
  );
}

export default Skills;
