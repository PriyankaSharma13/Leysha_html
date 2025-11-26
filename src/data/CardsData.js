import iso from "../assets/images/iso.png";
import foodSafety from "../assets/images/food-safety.jpg";
import indiaStandards from "../assets/images/India-standards.png";
import usApproved from "../assets/images/unnamed.jpg";
import certified from "../assets/images/Certified.png";

import iso9001 from "../assets/images/ISO-9001.png";
import haccp from "../assets/images/HACCP.png";
import fssai from "../assets/images/fssai.jpg";
import fda from "../assets/images/FDA.jpg";
import halal from "../assets/images/HALAL.jpg";
import european from "../assets/images/european.png";
import kosher from "../assets/images/KOSHER.png";
import organic from "../assets/images/ORGANIC.jpg";

import avatar1 from "../assets/images/cooking-avatar-01.jpg";
import avatar2 from "../assets/images/cooking-avatar-02.jpg";
import avatar3 from "../assets/images/cooking-avatar-03.jpg";
import avatar4 from "../assets/images/cooking-avatar-04.jpg";


import cuisine1 from "../assets/images/cuisine-connect-01.jpg";
import cuisine2 from "../assets/images/cuisine-connect-02.jpg";
import cuisine3 from "../assets/images/cuisine-connect-03.jpg";
import cuisine4 from "../assets/images/cuisine-connect-04.jpg";
import { FaClock, FaUsers } from "react-icons/fa"; 

export const certifications = [
  { img: iso, title: "ISO 9001:2015" },
  { img: foodSafety, title: "Food Safety" },
  { img: indiaStandards, title: "India Standards" },
  { img: usApproved, title: "US Approved" },
  { img: certified, title: "Certified" },
];

export const internationalCerts = [
  { img: iso9001 },
  { img: haccp },
  { img: fssai },
  { img: fda },
  { img: halal },
  { img: european },
  { img: kosher },
  { img: organic },
];

export const cookingAvatars = [avatar1, avatar2, avatar3, avatar4];


export const cuisines = [
  {
    img: cuisine1,
    title: "Authentic Biryani",
    time: "45 mins",
    timeIcon: <FaClock />,
    servings: "4-6 servings",
    servingsIcon: <FaUsers />,
  },
  {
    img: cuisine2,
    title: "Vegetable Pulao",
    time: "30 mins",
    timeIcon: <FaClock />,
    servings: "4 servings",
    servingsIcon: <FaUsers />,
  },
  {
    img: cuisine3,
    title: "Asian Fried Rice",
    time: "20 mins",
    timeIcon: <FaClock />,
    servings: "3-4 servings",
    servingsIcon: <FaUsers />,
  },
  {
    img: cuisine4,
    title: "Mediterranean Rice",
    time: "35 mins",
    timeIcon: <FaClock />,
    servings: "4 servings",
    servingsIcon: <FaUsers />,
  },
];


export const counters = [
    { label: "Countries", count: 70 },
    { label: "Continents", count: 5 },
  ];
