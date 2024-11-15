import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../../assets/css/Experience.css";

function Experience() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animates only the first time it comes into view
    threshold: 0.1, // Adjusts when the animation triggers (10% visibility)
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
            <li>
              Developed user interfaces using React, Redux, RTK Query, and
              Tailwind CSS for real-time ICU patient monitoring
            </li>
            <li>
              Created an intuitive and responsive front-end design for
              continuous patient assessment
            </li>
            <li>
              Collaborated with the team on UI/UX design and prototyping using
              Figma and Miro
            </li>
            <li>
              Contributed to back-end development for efficient data management
              and system reliability
            </li>
            <li>
              Implemented real-time patient vitals tracking, digital
              record-keeping, and role-based access control for secure,
              compliant data handling
            </li>
            <li>
              Followed Agile methodology using Jira for task tracking, GitLab
              for version control, and Confluence for team documentation
            </li>
            <li>
              Engaged in CI/CD workflows to ensure efficient development and
              deployment
            </li>
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
            <li>
              Contributed to network operations and infrastructure support
            </li>
            <li>Assisted in maintenance and optimization of network systems</li>
            <li>
              Worked with <strong>Microsoft Azure</strong> and{" "}
              <strong>AWS</strong> for enhanced system management
            </li>
            <li>
              Configured and managed <strong>Linux</strong> and{" "}
              <strong>Windows</strong> servers
            </li>
            <li>
              Oversaw firewall replacements to improve data center security
            </li>
            <li>
              Gained experience in cloud-based infrastructure solutions and
              network architecture
            </li>
            <li>
              Developed knowledge of <strong>network security protocols</strong>{" "}
              and system optimization practices within a corporate setting
            </li>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Experience;
