import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
  <div className="footer-container">
    <div className="footer-section about" id="home">
      <h2>3Dify</h2>
      <p>
        Transforming ideas into stunning 3D visuals effortlessly. Join us in revolutionizing 3D content creation.
      </p>
    </div>
    <div className="footer-section links" id="overview">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#overview">Overview</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#about">About Us</a></li>
      </ul>
    </div>
    <div className="footer-section social" id="features">
      <h3>Follow Us</h3>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-facebook"></i> Facebook
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter"></i> Twitter
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram"></i> Instagram
      </a>
    </div>
  </div>
  <div className="footer-bottom">
    <p>&copy; 2024 3Dify. All Rights Reserved. | <a href="/privacy-policy">Privacy Policy</a></p>
  </div>
</footer>
  );
};

export default Footer;
