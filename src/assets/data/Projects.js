// src/data/projectData.js
import image1 from "../images/image.png";

const Projects = [
  {
    title: "AI-Based Customized Travel Planning Platform For Galle",
    description: "This final year research project is an AI-powered travel planning platform tailored for the Galle area. It combines a machine learning backend, a chatbot, and a responsive front end to provide personalized travel experiences. Users receive tailored recommendations for activities, accommodations, restaurants, and famous sites based on preferences, enhancing travel planning with real-time AI insights. The project is hosted on AWS and Vercel for reliable performance and accessibility.",
    stack: ["React", "HTML", "CSS", "RTK Query", "Node.js", "Python (Machine Learning)", "MongoDB", "AWS", "Vercel", "Dialogflow", "ngrok"],  // Ensure it's an array
    features: [
      "Personalized activity and hotel suggestions",
      "AI-powered chatbot assistance",
      "Hotel, restaurant, and famous site discovery",
      "Galle area-specific recommendations",
    ],
    image: image1,
  },
  {
    title: "Project Management Dashboard",
    description: "A dashboard tool to manage team projects, deadlines, and tasks.",
    stack: ["Vue.js", "JavaScript", "Sass", "Express.js", "PostgreSQL"],  // Ensure it's an array
    features: ["Task management", "Analytics", "User roles"],
    image: image1,
  },
  // Other projects...
];


export default Projects;
