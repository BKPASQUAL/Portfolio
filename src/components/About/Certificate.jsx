import React from "react";
import "../../assets/css/Certificate.css";
import aws from "../../assets/images/certifacates/aws.png"
import udemy from "../../assets/images/certifacates/udemy.png"
import java from "../../assets/images/certifacates/java.png"
import deepLearning from "../../assets/images/certifacates/deepLearning.png"

function Certificate() {
  const certificates = [
    {
      id: 1,
      title: "React Developer",
      description:
        "Completed a comprehd",
      image: aws,
    },
    {
      id: 2,
      title: "Node.js Specialist",
      description: "Mastered backend development with Node.js and Express.",
      image: udemy,
    },
    {
      id: 3,
      title: "Web Design Fundamentals",
      description: "Learned HTML, CSS, and responsive design principles.",
      image: java,
    },
    {
      id: 4,
      title: "JavaScript Expert",
      description: "Advanced understanding of JavaScript and ES6+ features.",
      image: deepLearning,
    },
  ];

  return (
    <div className="Certificate-main">
      <div className="Certificate-title">Certificates</div>
      <div className="Certificate-con">
        {certificates.map((certificate) => (
          <div className="flip-card" key={certificate.id}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="Certificate-image"
                />
              </div>
              <div className="flip-card-back">
                <h3>{certificate.title}</h3>
                <p>{certificate.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificate;
