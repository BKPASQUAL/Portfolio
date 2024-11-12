import React from "react";
import "../../assets/css/Education.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Education() {
  const education = [
    {
      institution: "NSBM Green University Town",
      degree: "B.Sc. Engineering Honours in Computer Systems Engineering",
      year: "2025",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzMusNEftMbTRViAvsf9E2hevtoFoTcYmxHA&s",
    },
    {
      institution: "Richmond College",
      degree: "G.C.E. Advanced Level - Physical Science",
      year: "2019",
      town:"Galle",
      logo: "https://pbs.twimg.com/profile_images/1485903050317647876/wLIsadjz_400x400.jpg",
    },
    {
      institution: "Richmond College",
      degree: "G.C.E. Ordinary Level",
      year: "2016",
      town:"Galle",
      logo: "https://pbs.twimg.com/profile_images/1485903050317647876/wLIsadjz_400x400.jpg",
    },
  ];

  return (
    <div className="Education-main">
        <div className="Education-main-title">Edication</div>
      <VerticalTimeline>
        {education.map((edu, index) => (
        <VerticalTimelineElement
        key={index}
        contentStyle={{
          background: "black",
          color: "#fff",
           borderRadius: "10px",
          paddingTop: "20px",
          paddingBottom: "20px",
          border:"1px solid white"
        }}
        contentArrowStyle={{ borderRight: "7px solid black" }}
        date={edu.year}
        iconStyle={{ background: "black", color: "#fff", zIndex: 2 }} // Set a higher z-index
        icon={
          <img
            src={edu.logo}
            alt={`${edu.institution} logo`}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              objectFit: "cover",
              padding: "5px",
            }}
          />
        }
      >
        <div className="education-details">
            <h2 className="vertical-timeline-element-subtitle">{edu.institution}</h2>
            <h2 className="vertical-timeline-element-subtitle">{edu?.town}</h2>
          <h4 className="vertical-timeline-element-subtitle">{edu.degree}</h4>
          <p>{edu.grade}</p>
        </div>
      </VerticalTimelineElement>
      
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default Education;
