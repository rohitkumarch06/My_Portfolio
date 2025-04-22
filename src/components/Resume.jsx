import React from 'react';

function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="resume-container">
          <h2 className="section-title">Resume</h2>
          <p className="resume-description">
            Download my resume to get a comprehensive overview of my skills, experience, and educational background.
          </p>
          <a
            href="src/assets/Rohit_Kumar _Resume.pdf"
            download
            className="resume-download-btn-wrapper"
          >
            <span className="resume-download-btn">
              <i className="fas fa-download"></i>
              Download Resume
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;
