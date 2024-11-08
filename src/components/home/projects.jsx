import React from "react";
import "../../assets/css/Projects.css";
import image1 from "../../assets/images/image.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Projects() {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  
    React.useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);
  
  return (
    <motion.div
    ref={ref}
    initial="hidden"
    animate={controls}
    variants={{
      visible: { opacity: 1, y: 0, transition: { duration: 3 } },
      hidden: { opacity: 0, y: 50 },
    }}
  >
    <div className="projects-main">
      <p className="projects-main-title">My Projects</p>
      <div className="projects-con">
        <div className="projects-con-box">
          <div className="projects-box-left">
            <p>AI-Based Customized Travel Planning Platform For Galle</p>
            <div className="projects-box-left-img">
              <img src={image1} alt="image1" />
            </div>
          </div>
          <div className="projects-box-right">
            <div>
              <div className="project-section-title">Description</div>
              <div className="project-section-content">
                This platform uses AI to provide personalized travel plans for visitors to Galle, Sri Lanka.
              </div>
            </div>
            <div>
              <div className="project-section-title">Stack</div>
              <div className="project-section-content">
                <div>
                  <strong>Front End:</strong> React, HTML, CSS
                </div>
                <div>
                  <strong>Back End:</strong> Node.js, Python, MongoDB
                </div>
              </div>
            </div>
            <div>
              <div className="project-section-title">Features</div>
              <div className="project-section-content">
                Real-time recommendations, itinerary customization, and chat-based user assistance.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </motion.div>

  );
}

export default Projects;
