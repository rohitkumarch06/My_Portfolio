import React from 'react';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';
import project4 from '../assets/project4.jpg';

function Projects() {
  return (
    <section id="projects" className="projects section-colored">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {/* Project 1: Todo App */}
          <div className="project-card">
            <div className="project-image">
              <img src={project1} alt="Todo App" />
            </div>
            <div className="project-content">
              <h3>Todo App</h3>
              <p>A simple and intuitive to-do app that allows users to add, edit, and delete tasks. Features task categorization, prioritization, and a clean interface for better productivity.</p>
              <div className="project-tech">
                <span className="tech-tag">HTML</span>
                <span className="tech-tag">CSS</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">React</span>
                <span className="tech-tag">MongoDB</span>
                <span className="tech-tag">Express</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/rohitkumarch06/Todo-App" className="project-link code-link" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-code"></i> Code
                </a>
                <a href="https://yourtodoapp.com" className="project-link demo-link" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-eye"></i> Live Demo
                </a>
              </div>
            </div>
          </div>

          {/* Project 2: Movie Revenue Prediction Model */}
          <div className="project-card">
            <div className="project-image">
              <img src={project2} alt="Movie Revenue Prediction Model" />
            </div>
            <div className="project-content">
              <h3>Movie Revenue Prediction Model</h3>
              <p>A predictive model that estimates movie revenue based on historical data using linear regression, analyzing factors like budget, genre, cast, and release date to forecast earnings.</p>
              <div className="project-tech">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Pandas</span>
                <span className="tech-tag">Scikit-learn</span>
                <span className="tech-tag">Linear Regression</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/rohitkumarch06/MOVIE-REVENUE-PREDICTION-Model-using-Linear-Regression" className="project-link code-link" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-code"></i> Code
                </a>
                <a href="https://yourpredictionmodel.com" className="project-link demo-link" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-eye"></i> Live Demo
                </a>
              </div>
            </div>
          </div>

          {/* Project 3: Myntra Clone */}
          <div className="project-card">
            <div className="project-image">
              <img src={project3} alt="Myntra Clone" />
            </div>
            <div className="project-content">
              <h3>Myntra Clone</h3>
              <p>A static e-commerce website built to replicate the look and feel of a modern fashion store, featuring product listings, cart layout, and smooth user interactions.</p>
              <div className="project-tech">
                <span className="tech-tag">HTML</span>
                <span className="tech-tag">CSS</span>
                <span className="tech-tag">JavaScript</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/rohitkumarch06/Myntra_functional-clone9" className="project-link code-link" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-code"></i> Code
                </a>
                <a href="https://yourmyntraclonedemo.com" className="project-link demo-link" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-eye"></i> Live Demo
                </a>
              </div>
            </div>
          </div>

          {/* Project 4: Bat Ball Game */}
          <div className="project-card">
            <div className="project-image">
              <img src={project4} alt="Bat Ball Game" />
            </div>
            <div className="project-content">
              <h3>Bat Ball Game</h3>
              <p>A simple web-based cricket game where users can play by clicking buttons for bat, ball, or wicket. Displays match outcomes with basic logic and real-time score updates.</p>
              <div className="project-tech">
                <span className="tech-tag">HTML</span>
                <span className="tech-tag">CSS</span>
                <span className="tech-tag">JavaScript</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/rohitkumarch06/Bat-Ball-Stump" className="project-link code-link" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-code"></i> Code
                </a>
                <a href="https://yourbatballgame.com" className="project-link demo-link" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-eye"></i> Live Demo
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;
