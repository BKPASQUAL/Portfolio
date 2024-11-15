import React from "react";
import "../../assets/css/Certificate.css";
import aws from "../../assets/images/certifacates/aws.png";
import udemy from "../../assets/images/certifacates/udemy.png";
import java from "../../assets/images/certifacates/java.png";
import deepLearning from "../../assets/images/certifacates/deepLearning.png";

function Certificate() {
  const certificates = [
    {
      id: 1,
      title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
      description:
        "This certificate is awarded by AWS Training and Certification to individuals who complete the AWS Academy Cloud Foundations course, providing foundational knowledge in AWS cloud concepts, core services, pricing, architecture, and support models.",
      image: aws,
      link: "https://www.credly.com/badges/78b3968f-85ac-4a76-a0af-5ba950b34c33/print",
    },
    {
      id: 2,
      title: "JavaScript Mastery: From Basics to Advanced",
      description: "Completed a 10-hour course on JavaScript fundamentals and advanced concepts, enhancing skills in DOM manipulation, asynchronous programming, and error handling for modern web development.",
      image: udemy,
      link: "https://udemy-certificate.s3.amazonaws.com/image/UC-04a93fbf-458d-407b-b73b-04e9ffedb4a9.jpg",

    },
    {
      id: 3,
      title: "Java Programming Professional Certificate",
      description: "Completed a three-month professional Java programming certification, gaining foundational to advanced skills through the Professional Development Unit at the Informatics Institute of Technology(IIT).",
      image: java,
    },
    {
      id: 4,
      title: "Deep Learning Onramp Completion",
      description: "Completed a self-paced course on deep learning fundamentals, covering essential concepts and hands-on practice with MathWorks tools and techniques.",
      image: deepLearning,
      link: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=6967dcd2-e1d3-4c66-87df-1d9920cfd467&",

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
                {certificate.link && (
                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certificate-link"
                  >
                    <span className="material-symbols-outlined">link</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificate;
