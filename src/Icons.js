import nodejs from "./assets/nodejs.webp";
import react from "./assets/react.webp";
import tailwind from "./assets/tailwind2.webp";
import html from "./assets/html.webp";
import mongodb from "./assets/mongo.webp";
import visualCode from "./assets/visualcode.webp";
import mysql from "./assets/mysql.webp";
import framer from "./assets/framer.webp";
import javascript from "./assets/javascript.webp";
import git from "./assets/git.webp";
import css from "./assets/css.webp";
// import redux from "./assets/redux.png"
// import express from "./assets/express.png"
// import json from "./assets/json.png"
// import api from "./assets/api.png"
// import postman from "./assets/postman.png"

import screenshot1 from "./assets/screen1.webp";
import screenshot2 from "./assets/screen2.webp";
import screenshot3 from "./assets/screen3.webp";
import ecommerce1 from "./assets/ecommerce1.webp";
import ecommerce2 from "./assets/ecommerce2.webp";
import ecommerce3 from "./assets/ecommerce3.webp";
import ecommerce4 from "./assets/ecommerce4.webp";
import ecommerce5 from "./assets/ecommerce5.webp";
import task1 from "./assets/task1.webp";
import task2 from "./assets/task2.webp";
import task3 from "./assets/task3.webp";
import task4 from "./assets/task4.webp";
import task5 from "./assets/task5.webp";
import task6 from "./assets/task6.webp";
import task7 from "./assets/task7.webp";
import task8 from "./assets/task8.webp";

export const icons = [
  { iconName: "react", url: react, color: "#3b82f6" },
  { iconName: "nodejs", url: nodejs, color: "#16a34a" },
  // { iconName: "nodejs2", url: nodejs2, color: "yellow" },
  { iconName: "tailwindcss", url: tailwind, color: "cyan" },
  { iconName: "mysql", url: mysql, color: "orange" },
  { iconName: "mongodb", url: mongodb, color: "#3b82f6" },
  { iconName: "Git", url: git, color: "purple" },
  { iconName: "html", url: html, color: "orange" },
  { iconName: "Css", url: css, color: "blue" },
  { iconName: "framer Motion", url: framer, color: "framer" },
  { iconName: "VS Code", url: visualCode, color: "blue" },
  { iconName: "Javascript", url: javascript, color: "yellow" },
];

export const projectDetails = [
  {
    title: "Ecommerce Application",
    description:
      "Developed e-commerce application with  JWT Token,Cookies authentication and authorization. Operations user can performs, filter products, add to cart , add wishlist products, and also view product details.",
    label: [
      "React.js",
      "Tailwindcss",
      "Express.js",
      "Node.js",
      "Mongoose",
      "Mongodb",
    ],
    screenShots: [ecommerce1, ecommerce2, ecommerce3, ecommerce4],
    link: [
      {
        github_Url: "https://github.com/Mayur7720/Ecommerce-Application",
        live_Url: "",
      },
    ],
  },

  {
    title: "Project Manager App",
    description:
      " Developed Task Management App, where application allows a superuser to create multiple tasks and assign them to individual candidates or groups and also, the superuser has the capability to update tasks as needed. Candidates can view all assigned tasks, create personal checklists, and take notes to enhance their productivity",
    label: ["React.js", "Tailwindcss"],
    screenShots: [task1, task2, task3, task4, task5, task6, task7, task8],
    link: [
      {
        github_Url: "https://github.com/Mayur7720/Project_Manager",
        live_Url: "",
      },
    ],
  },
  {
    title: "Chat Application",
    description:
      " Develped Chat Application using socket.io which help for realtime data transimission, In this project i have used for messaging, user can chat with single user as well as with group can also share files,picture to another person as well.    ",
    label: [
      "React.js",
      "Socket.io",
      "MaterialUi",
      "Node.js",
      "Express.js",
      "Mongoose",
      "Mongodb",
    ],
    screenShots: [screenshot1, screenshot2, screenshot3],
    link: [
      {
        github_Url: "https://github.com/Mayur7720/Sanvad_Chat_Application",
        live_Url: "",
      },
    ],
  },

];
