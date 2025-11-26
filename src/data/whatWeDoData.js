import img2 from "../assets/images/img-02.jpg";
import img3 from "../assets/images/img-03.jpg";
import img4 from "../assets/images/img-04.jpg";
import img5 from "../assets/images/img-05.jpg";
import { FaLeaf, FaSeedling, FaSync, FaGem } from "react-icons/fa";

const whatWeDoItems = [
  {
    img: img2,
    text: "Sourced from the foothills of the Himalayas where pristine conditions create extraordinary grains",
   icon: <FaLeaf />, 
    title: "Origin",
  },
  {
    img: img3,
    text: "100% natural processing with zero additives, preserving nature's perfection",
     icon: <FaSeedling />,
    title: "Purity",
  },
  {
    img: img4,
    text: "State-of-the-art facilities meeting international standards",
    icon: <FaSync/>,
    title: "Process",
  },
  {
    img: img5,
    text: "Rigorous quality control at every step ensures only the finest grains reach your table. Excellence is our standard.",
    icon: <FaGem/>,
    title: "Quality",
  },
];

export default whatWeDoItems;
