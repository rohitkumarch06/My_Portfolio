import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle active link based on scroll position
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    const onScroll = () => {
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${sectionId}`) {
              link.classList.add("active");
              link.parentElement.classList.add("active");
            } else {
              link.parentElement.classList.remove("active");
            }
          });
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // IMPORTANT: Remove the body overflow manipulation
  // We don't want to change the body overflow since it's causing issues

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <a href="#" className="logo gradient-text">Rohit Portfolio</a>
        
        {/* Mobile Menu Button */}
        <button
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        {/* Navigation Links */}
        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#about" className="nav-link" onClick={closeMobileMenu}>About</a></li>
          <li><a href="#skills" className="nav-link" onClick={closeMobileMenu}>Skills</a></li>
          <li><a href="#projects" className="nav-link" onClick={closeMobileMenu}>Projects</a></li>
          <li><a href="#resume" className="nav-link" onClick={closeMobileMenu}>Resume</a></li>
          <li><a href="#contact" className="nav-link" onClick={closeMobileMenu}>Contact</a></li>
        </ul>
      </div>
      
      {/* Backdrop overlay for mobile - only use if needed */}
      {isMobileMenuOpen && (
        <div className="mobile-backdrop" onClick={closeMobileMenu}></div>
      )}
    </nav>
  );
}

export default Navbar;