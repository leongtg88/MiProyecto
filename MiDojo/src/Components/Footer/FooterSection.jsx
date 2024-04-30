import React from 'react';
import './FooterSection.css';

const FooterSection = () => {
  return (
    <div className="footer-container">
      <footer className="container-inside">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="#" className="nav-link">About Us</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Schedule</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
        </ul>
        <p className="footer-copy text-muted">&copy; ToseiGusoku Developer</p>

      
      </footer>
      
    </div>
  );
};

export default FooterSection;
