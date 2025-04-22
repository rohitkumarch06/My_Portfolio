import React, { useEffect } from 'react';

function Footer() {
  useEffect(() => {
    // Handle scroll event to toggle visibility of the back-to-top button
    const handleScroll = () => {
      const backToTopButton = document.querySelector('.back-to-top');
      if (window.scrollY > 100) {  // Show button after scrolling down 100px
        backToTopButton.classList.add('show');
      } else {
        backToTopButton.classList.remove('show');
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to the top of the page when the back-to-top button is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <p className="copyright">© 2025 Rohit. All rights reserved.</p>
        <a href="javascript:void(0);" className="back-to-top" onClick={scrollToTop}>
          <i className="fas fa-chevron-up"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
