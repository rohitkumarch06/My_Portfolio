import React from 'react';

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Hi, I'm <span className="gradient-name">Rohit Kumar</span></h1>
          <h2>Turning ideas into clean, responsive interfaces</h2>
          <p>Exploring machine learning and solving coding challenges to level up every day.</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </div>
        <div className="scroll-down">
          <a href="#about">
            <i className="fas fa-chevron-down"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
