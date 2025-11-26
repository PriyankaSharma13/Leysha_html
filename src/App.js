import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import WhatWeDoSection from "./components/WhatWeDo";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<WhatWeDoSection />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/footer" element={<FooterSection />} />
      </Routes>
    </div>
  );
}

export default App;
