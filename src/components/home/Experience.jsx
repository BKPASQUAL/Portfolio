import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../../assets/css/Experience.css";

function Experience() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animates only the first time it comes into view
    threshold: 0.1,    // Adjusts when the animation triggers (10% visibility)
  });

  return (
    <motion.div
      ref={ref} // Attach the ref to trigger the animation on scroll
      className="experience-main"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}} // Animate only when inView
      transition={{ duration: 0.8 }}
    >
      <motion.p
        className="experience-title"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}} // Animate only when inView
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Work Experience
      </motion.p>
      <div className="experience-con">
        {/* Experience at Amerck Inc. */}
        <motion.div
          className="experience-main-one"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}} // Animate only when inView
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h2>Software Engineer, Intern</h2>
          <h3>Amerck Inc., StratfordAve, Colombo</h3>
          <ul className="experience-details">
            <li>Developed user interfaces using React, Redux, RTK Query, and Tailwind CSS</li>
            <li>Collaborated on UI/UX design and prototyping using Figma and Miro</li>
            <li>Engaged in agile development processes (Jira and Confluence)</li>
            <li>Managed version control and CI/CD workflows via GitLab</li>
          </ul>
        </motion.div>

        {/* Experience at Fairfast Insurance */}
        <motion.div
          className="experience-main-two"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}} // Animate only when inView
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <h2>Training Network Engineer</h2>
          <h3>Fairfast Insurance (Pvt) Ltd, Colombo</h3>
          <ul className="experience-details">
            <li>Contributed to network operations and infrastructure support</li>
            <li>Assisted in maintenance and optimization of network systems</li>
            <li>Worked with Azure cloud for enhanced system management</li>
            <li>Developed full-stack applications using React, Node.js, RTK Query, Sequelize, and Express</li>
            <li>Designed and built user interfaces with React and managed API interactions</li>
            <li>Contributed to UI/UX design using Figma</li>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Experience;
