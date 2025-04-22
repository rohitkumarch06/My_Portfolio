import React from "react";
import profileImage from "../assets/profile.jpg";

function About() {
  return (
    <section id="about" className="about section-light">
      <div className="about-wrapper">
        <h2 className="section-title">About Me</h2>
        <div className="about-container">
          <div className="about-image">
            <img src={profileImage} alt="Rohit Kumar" />
          </div>
          <div className="about-right">
            <div className="about-intro">
              <h3>Let me introduce myself</h3>
              <div className="about-text">
                <p>
                  Hello! I'm <strong>Rohit Kumar</strong>, a 3rd year B.Tech
                  student in Computer Science and Engineering with a
                  specialization in Artificial Intelligence and Machine Learning
                  at Haldia Institute of Technology.
                </p>
                <p>
                  I specialize in <strong>frontend development</strong> crafting
                  responsive and user-friendly websites, with a strong interest
                  in expanding into backend technologies to become a{" "}
                  <strong>full-stack developer</strong>.
                </p>
                <p>
                  I’m passionate about <strong>machine learning</strong> and
                  enjoy working on data-driven projects that push my analytical
                  and technical skills. With a current CGPA of 8.43, I strive to
                  balance academic excellence with hands-on, practical
                  experience.
                </p>
                <p>
                  Currently, I’m a trainee at <strong>PwC Launchpad 3.0</strong>
                  , where I’m gaining insight into real-world industry practices
                  and workflows.
                </p>
                <p>
                  In addition, I freelance at <strong>Outlier.ai</strong>, helping train AI
                  systems and building meaningful, impact-driven projects. To
                  stay sharp, I regularly solve coding challenges and continue
                  to grow as a well-rounded developer.
                </p>
              </div>
            </div>
            <div className="about-info">
              <div className="info-item">
                <strong>Name:</strong>
                <span>Rohit Kumar</span>
              </div>
              <div className="info-item">
                <strong>Email:</strong>
                <span>rohitrajk596@gmail.com</span>
              </div>
              <div className="info-item">
                <strong>Location:</strong>
                <span>Kshudiram, Haldia, West Bengal, India</span>
              </div>
              <div className="info-item">
                <strong>Experience:</strong>
                <span>Trainee - PwC Launchpad 3.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
