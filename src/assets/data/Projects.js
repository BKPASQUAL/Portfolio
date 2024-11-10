// src/components/Projects.js

import tpp1 from "../images/TPP/tpp1.png";
import tpp2 from "../images/TPP/tpp2.png";
import tpp3 from "../images/TPP/tpp3.png";
import tpp4 from "../images/TPP/tpp4.png";
import tpp5 from "../images/TPP/tpp5.png";

import medi1 from "../images/Medicenece/medi1.png";
import medi2 from "../images/Medicenece/medi2.png";

const Projects = [
  {
    title: "AI-Based Customized Travel Planning Platform For Galle",
    description: "This final year research project is an AI-powered travel planning platform tailored for the Galle area. It combines a machine learning backend, a chatbot, and a responsive front end to provide personalized travel experiences. Users receive tailored recommendations for activities, accommodations, restaurants, and famous sites based on preferences, enhancing travel planning with real-time AI insights. The project is hosted on AWS and Vercel for reliable performance and accessibility.",
    stack: ["React", "HTML", "CSS", "RTK Query", "Node.js", "Python (Machine Learning)", "MongoDB", "AWS", "Vercel", "Dialogflow", "ngrok"],
    features: [
      "Personalized activity and hotel suggestions",
      "AI-powered chatbot assistance",
      "Hotel, restaurant, and famous site discovery",
      "Galle area-specific recommendations",
    ],
    images: [tpp1, tpp2, tpp3, tpp4, tpp5],
    github_fe: "https://github.com/BKPASQUAL/TPP_FE.git",
    github_be: "https://github.com/BKPASQUAL/TPP_BE.git",
  },
  
  {
    title: "Medical Laboratory Management System for Medisense Laboratory Pvt Ltd",
    description: "This web-based platform streamlines the operations of Medisense Laboratory Pvt Ltd, a diagnostics company. It connects all departments and allows efficient management of customer and doctor records, patient data, and test results, facilitating a role-based system for secure data access.",
    stack: ["React", "RTK Query", "RTK", "HTML", "CSS", "RSuite", "Bootstrap", "Node.js", "Express", "Sequelize", "MySQL"],
    features: [
      "Role-based access control for data security",
      "Customer and doctor record management",
      "Patient database maintenance",
      "Test result management",
      "Detailed reporting and analytics",
      "Receipts and billing management",
    ],
    images: [medi1, medi2],
    github_fe: "https://github.com/YourRepo/MedicalLabManagementSystem_FE",
    github_be: "https://github.com/YourRepo/MedicalLabManagementSystem_BE",
    github_management: "https://github.com/YourRepo/MedicalLabManagementSystem_Management",
  }
  
  // Add other projects as needed...
];

export default Projects;
