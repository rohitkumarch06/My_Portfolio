import React from 'react';

function Contact() {
  return (
    <section id="contact" className="contact section-light">
      <div className="container contact-wrapper">
        <h2 className="section-title">Contact</h2>

        <div className="contact-container">
          <div className="contact-card">
            <div className="contact-icon">
              <i className="fas fa-envelope-open-text"></i> {/* Modern envelope icon */}
            </div>
            <h3>Email</h3>
            <p>rohitrajk596@gmail.com</p>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <i className="fas fa-mobile-alt"></i> {/* Modern mobile phone icon */}
            </div>
            <h3>Phone</h3>
            <p>+91-9525806681</p>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <i className="fas fa-map-marker-alt"></i> {/* Modern location pin icon */}
            </div>
            <h3>Location</h3>
            <p>Kshudiram, Haldia, West Bengal, India</p>
          </div>
        </div>

        <div className="social-connect">
          <h3>Let's connect on social media</h3>
          <div className="social-icons">
            <a href="https://github.com/rohitkumarch06" className="social-icon">
            <i class="fa-brands fa-square-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/rohit-kumar-779293257/" className="social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://leetcode.com/u/Rohit_Kumar95/" className="social-icon">
            <i class="fa-solid fa-code"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
