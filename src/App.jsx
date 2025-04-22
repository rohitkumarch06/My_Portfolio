import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="portfolio-container">
      <Navbar />
      <Hero />
      <div className="border-lr">
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
