import React from 'react';

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-container-wrapper"> {/* New wrapper container */}
        <h2 className="section-title">Skills</h2>
        
        <div className="skills-container">
          {/* Programming Language */}
          <div className="skill-category programming-language">
            <div className="category-header">
              <div className="icon-circle">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <h3>Programming Language</h3>
            </div>
            <div className="skill-list">
              <span className="skill-item">C</span>
              <span className="skill-item">C++(DSA)</span>
              <span className="skill-item">Python</span>
              <span className="skill-item">Java</span>
              <span className="skill-item">SQL</span>
            </div>
          </div>
          
          {/* Web Development */}
          <div className="skill-category web-development">
            <div className="category-header">
              <div className="icon-circle">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="9" y1="3" x2="9" y2="21"></line>
                </svg>
              </div>
              <h3>Web Development</h3>
            </div>
            <div className="skill-list">
              <span className="skill-item">HTML</span>
              <span className="skill-item">CSS</span>
              <span className="skill-item">Javascript</span>
              <span className="skill-item">React</span>
              <span className="skill-item">Node.js</span>
              <span className="skill-item">Express</span>
              <span className="skill-item">MongoDB</span>
            </div>
          </div>
          
          {/* Core Concept */}
          <div className="skill-category core-concept">
            <div className="category-header">
              <div className="icon-circle">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 20V10"></path>
                  <path d="M12 20V4"></path>
                  <path d="M6 20v-6"></path>
                </svg>
              </div>
              <h3>Core Concept</h3>
            </div>
            <div className="skill-list">
              <span className="skill-item">Operating System</span>
              <span className="skill-item">Computer Networks</span>
              <span className="skill-item">DBMS</span>
            </div>
          </div>
          
          {/* Databases */}
          <div className="skill-category databases">
            <div className="category-header">
              <div className="icon-circle">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3c5.5 0 10 1.5 10 4v14c0 2.5-4.5 4-10 4s-10-1.5-10-4V7c0-2.5 4.5-4 10-4"></path>
                  <line x1="12" y1="3" x2="12" y2="21"></line>
                </svg>
              </div>
              <h3>Databases</h3>
            </div>
            <div className="skill-list">
              <span className="skill-item">MySQL</span>
              <span className="skill-item">Oracle</span>
            </div>
          </div>
          
          {/* Machine Learning */}
          <div className="skill-category machine-learning">
            <div className="category-header">
              <div className="icon-circle">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <h3>Machine Learning</h3>
            </div>
            <div className="skill-list">
              <span className="skill-item">Pandas</span>
              <span className="skill-item">NumPy</span>
              <span className="skill-item">Seaborn</span>
              <span className="skill-item">Matplotlib</span>
            </div>
          </div>
          
          {/* Tools & IDE */}
          <div className="skill-category tools-ide">
            <div className="category-header">
              <div className="icon-circle">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 7V3H4v4H0v9h4v4h8v-4h4V7h-4z"></path>
                </svg>
              </div>
              <h3>Tools & IDE</h3>
            </div>
            <div className="skill-list">
              <span className="skill-item">VS Code</span>
              <span className="skill-item">Git</span>
              <span className="skill-item">GitHub</span>
              <span className="skill-item">Docker</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
