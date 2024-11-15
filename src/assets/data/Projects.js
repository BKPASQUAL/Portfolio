import tpp1 from "../images/TPP/tpp1.png";
import tpp2 from "../images/TPP/tpp2.png";
import tpp3 from "../images/TPP/tpp3.png";
import tpp4 from "../images/TPP/tpp4.png";
import tpp5 from "../images/TPP/tpp5.png";
import tpp6 from "../images/TPP/tpp6.png";
import tpp7 from "../images/TPP/tpp7.png";
import tpp8 from "../images/TPP/tpp8.png";

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

import green1 from "../images/Green/green1.png"
import green2 from "../images/Green/green2.png"
import green3 from "../images/Green/green3.png"
import green4 from "../images/Green/green4.png"
import green5 from "../images/Green/green5.png"
import green6 from "../images/Green/green6.png"

import ch1 from "../images/Hardware/ch1.png"
import ch2 from "../images/Hardware/ch2.png"
import ch3 from "../images/Hardware/ch3.png"
import ch4 from "../images/Hardware/ch4.png"

import vital1 from "../images/vitalWatch/vital1.png"
import vital2 from "../images/vitalWatch/vital2.png"
import vital3 from "../images/vitalWatch/vital3.png"
import vital4 from "../images/vitalWatch/vital4.png"
import vital5 from "../images/vitalWatch/vital5.png"
import vital6 from "../images/vitalWatch/vital6.png"

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
    images: [tpp1, tpp2, tpp3, tpp4, tpp5,tpp6,tpp7,tpp8],
    github_fe: "https://github.com/BKPASQUAL/TPP_FE.git",
    github_be: "https://github.com/BKPASQUAL/DialogFlow_BE.git",
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
    github_fe: "https://github.com/BKPASQUAL/Medisense_FE.git",
    github_be: "https://github.com/BKPASQUAL/medisense_be.git",

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
    github_fe: "https://github.com/BKPASQUAL/Car-Store-FE.git",
    github_be: "https://github.com/BKPASQUAL/Car-Store-BE.git",
    github_management: "https://github.com/BKPASQUAL/Car-Store-Management.git",
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
    github_fe: "https://github.com/BKPASQUAL/Weddings_By_Sonali_FE.git",
    github_be: "https://github.com/BKPASQUAL/Weddings_By_Sonali_BE.git",
  },

  {
    title: "Green Light - Car Inspection Platform",
    description:
      "Green Light is a car inspection platform developed for a car inspection company. It provides users with detailed inspection reports on various parts of a vehicle, offering a comprehensive assessment of its overall condition. This web-based application aims to simplify the inspection process for users and administrators, generating in-depth documentation for every vehicle inspected.",
    stack: [
      "React",
      "CSS",
      "Bootstrap",
      "RSuite",
      "Vercel"
    ],
    features: [
      "Detailed inspection reports for each vehicle part",
      "Automated document generation for comprehensive inspections",
      "User-friendly web-based platform for both customers and inspectors",
      "Role-based access for inspectors and administrators",
    ],
    images: [green1, green2, green3, green4, green5, green6],
    github_fe: "https://github.com/BKPASQUAL/GreenLight.git",
    demo: "https://green-light-neon.vercel.app/home"
  },
  {
    title: "Vital Watch - Smart ICU Patient Monitoring System",
    description:
      "Vital Watch is a smart ICU patient monitoring system designed to replace traditional paper records with digital monitoring. This system enables real-time vital sign monitoring and simplifies patient data analysis, providing role-based access control for enhanced security and data management.",
    stack: [
      "React",
      "RTK Query",
      "ApexCharts",
      "Bootstrap",
      "Node.js",
      "Sequelize",
      "Express",
      "MySQL",
    ],
    features: [
      "Real-time vital sign monitoring",
      "Replacement of old paper records with digital tracking",
      "Patient data analysis and insights",
      "Patient database maintenance",
      "Role-based access control for secure data handling",
    ],
    images: [vital1, vital2, vital3, vital4, vital5, vital6],
    github_fe: "https://github.com/BKPASQUAL/vitalwatchFE.git",
    github_be: "https://github.com/AnukaFonseka/vital_watch_be.git",
  },
  {
    title: "Champika Hardware - Retail & Inventory Management System",
    description:
      "Champika Hardware is an ongoing project designed for managing hardware distribution and retail operations. It includes a comprehensive inventory system to handle stock management, customer records, supplier relationships, and billing processes. With a centralized database, the platform helps streamline inventory, billing, and data maintenance, enhancing efficiency for both wholesale and retail activities.",
    stack: [
      "React",
      "RTK Query",
      "Node.js",
      "Sequelize",
      "Express",
      "Tailwind CSS",
      "Figma",
      "MUI",
      "RSuite"
    ],
    features: [
      "Inventory management for hardware items",
      "Billing and receipt generation",
      "Customer and supplier management",
      "Database maintenance for customer and supplier records",
      "Centralized system for efficient retail and distribution operations"
    ],
    images: [ch1, ch2, ch3, ch4],
    github_fe: "https://github.com/BKPASQUAL/Champika-Hardware-FE.git",
    // github_be: "https://github.com/YourRepo/ChampikaHardware_BE",
  },
];

export default Projects;
