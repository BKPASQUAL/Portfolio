// src/components/Projects.js
import React, { useEffect } from "react";
import "../../assets/css/Projects.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import projectData from "../../assets/data/Projects";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation , Autoplay  } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

function Projects() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
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
          {projectData.map((project, index) => (
            <div
              className={`projects-con-box ${
                index % 2 === 0 ? "left-layout" : "right-layout"
              }`}
              key={index}
            >
              <div className="projects-box-title">
                <p>{project.title}</p>
              </div>
              <div className="projects-box-left">
                <div className="projects-box-left-img">
                  {/* Custom Navigation Buttons */}
                  <span
                    className="material-symbols-outlined arrow left"
                    id={`prev-${index}`}
                  >
                    keyboard_arrow_left
                  </span>

                  <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    modules={[Navigation, Autoplay]} // Add Autoplay module
                    navigation={{
                      prevEl: `#prev-${index}`,
                      nextEl: `#next-${index}`,
                    }}
                    loop={true} // Enable looping
                    autoplay={{
                      delay: 2000, // Set delay to 2 seconds
                      disableOnInteraction: false, // Keep autoplay after manual swipe
                    }}
                  >
                    {project.images.map((image, imgIndex) => (
                      <SwiperSlide key={imgIndex}>
                        <img
                          src={image}
                          alt={`${project.title} image ${imgIndex + 1}`}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  <span
                    className="material-symbols-outlined arrow right"
                    id={`next-${index}`}
                  >
                    keyboard_arrow_right
                  </span>
                </div>
              </div>
              <div className="projects-box-right">
                <div>
                  <div className="project-section-title">Description</div>
                  <div className="project-section-content">
                    {project.description}
                  </div>
                </div>
                <div>
                  <div className="project-section-title">Stack</div>
                  <div className="project-section-content stack-list">
                    {project.stack.map((tech, techIndex) => (
                      <span key={techIndex}>{tech} | </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="project-section-title">Features</div>
                  <div className="project-section-content">
                    <ul>
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex}>{feature}</div>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;