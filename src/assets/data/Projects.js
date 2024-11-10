import tpp1 from "../images/TPP/tpp1.png";
import tpp2 from "../images/TPP/tpp2.png";
import tpp3 from "../images/TPP/tpp3.png";
import tpp4 from "../images/TPP/tpp4.png";
import tpp5 from "../images/TPP/tpp5.png";

import medi1 from "../images/Medicenece/medi1.png";
import medi2 from "../images/Medicenece/medi2.png";

import car1 from "../images/CarStore/car1.png";
import car2 from "../images/CarStore/car2.png";
import car3 from "../images/CarStore/car3.png";
import car4 from "../images/CarStore/car4.png";
import car5 from "../images/CarStore/car5.png";
import car6 from "../images/CarStore/car6.png";
import car7 from "../images/CarStore/car7.png";
import car8 from "../images/CarStore/car8.png";

import event1 from "../images/EventInventory/event1.png";
import event2 from "../images/EventInventory/event2.png";
import event3 from "../images/EventInventory/event3.png";
import event4 from "../images/EventInventory/event4.png";
import event5 from "../images/EventInventory/event5.png";
import event6 from "../images/EventInventory/event6.png";
import event7 from "../images/EventInventory/event7.png";
import event8 from "../images/EventInventory/event8.png";
import event9 from "../images/EventInventory/event9.png";

const Projects = [
  {
    title: "AI-Based Customized Travel Planning Platform For Galle",
    description:
      "This final year research project is an AI-powered travel planning platform tailored for the Galle area. It combines a machine learning backend, a chatbot, and a responsive front end to provide personalized travel experiences. Users receive tailored recommendations for activities, accommodations, restaurants, and famous sites based on preferences, enhancing travel planning with real-time AI insights. The project is hosted on AWS and Vercel for reliable performance and accessibility.",
    stack: [
      "React",
      "HTML",
      "CSS",
      "RTK Query",
      "Node.js",
      "Python (Machine Learning)",
      "MongoDB",
      "AWS",
      "Vercel",
      "Dialogflow",
      "ngrok",
    ],
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
    title:
      "Medical Laboratory Management System for Medisense Laboratory Pvt Ltd",
    description:
      "This web-based platform streamlines the operations of Medisense Laboratory Pvt Ltd, a diagnostics company. It connects all departments and allows efficient management of customer and doctor records, patient data, and test results, facilitating a role-based system for secure data access.",
    stack: [
      "React",
      "RTK Query",
      "RTK",
      "HTML",
      "CSS",
      "RSuite",
      "Bootstrap",
      "Node.js",
      "Express",
      "Sequelize",
      "MySQL",
    ],
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

  },

  {
    title: "Luxury Ride - Premium Car Store",
    description:
      "Luxury Ride is a sophisticated car dealership platform where users can explore and obtain details about luxury cars. This web application includes both a user-facing site and a management dashboard. Users can view car listings, request more details via an email-based inquiry system, and get real-time updates. The management dashboard allows administrators to manage car listings, inquiries, and site updates effectively, providing a seamless admin experience.",
    stack: [
      "React",
      "RTK Query",
      "ApexCharts",
      "MUI",
      "Bootstrap",
      "Google Icons",
      "Node.js",
      "Sequelize",
      "Express",
      "MySQL",
      "AWS EC2",
      "Vercel",
      "GitHub",
    ],
    features: [
      "Email-based inquiry system",
      "Detailed car information and specifications",
      "Real-time updates and site management",
      "Role-based access for user and admin functionality",
      "Admin dashboard for managing car listings and site data",
    ],
    images: [car1, car2, car3, car4, car5, car6, car7, car8],
    github_fe: "https://github.com/YourRepo/LuxuryRide_FE",
    github_be: "https://github.com/YourRepo/LuxuryRide_BE",
    github_management: "https://github.com/YourRepo/LuxuryRide_Management",
    demo: "https://luxuryrides.vercel.app/",
  },

  {
    title: "Weddings By Sonali - Event Inventory Management System",
    description:
      "Weddings By Sonali is an event management platform designed to streamline inventory management for event planning. It assists with tracking and managing items required for events, providing a centralized system for organizing and maintaining resources. The system is ideal for event planners, offering real-time inventory insights, analytics, and detailed item management to optimize event preparation.",
    stack: [
      "React",
      "RTK Query",
      "TailwindCSS",
      "ApexCharts",
      "Node.js",
      "RSuite",
      "MySQL",
      "Sequelize",
      "Express",
      "ngrok",
      "Vercel",
    ],
    features: [
      "Comprehensive inventory tracking and management",
      "Real-time analytics and insights with ApexCharts",
      "Detailed event planning and item tracking",
      "User-friendly interface with role-based access for staff and managers",
      "Efficient resource allocation for event planning",
    ],
    images: [
      event1,
      event2,
      event3,
      event4,
      event5,
      event6,
      event7,
      event8,
      event9,
    ],
    github_fe: "https://github.com/YourRepo/WeddingsBySonali_FE",
    github_be: "https://github.com/YourRepo/WeddingsBySonali_BE",
  },
];

export default Projects;
