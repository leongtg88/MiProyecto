import React from 'react'
import './FooterSection.css';


const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="logo-container">
        <img src="../../assets/images/Logo Blanco 110px.png" alt="Logo" className="logo" />
      </div>
      <div className="social-icons">
        <a href="#" className="social-icon">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <div className="button-container">
        <button className="footer-button">Contacto</button>
      </div>
    </footer>
  );
};

export default Footer;
