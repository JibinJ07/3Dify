import React from 'react';
import './Header.css';

const Header = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="header">
      <div className="logo" onClick={() => scrollToSection('home')}>
        3Dify
      </div>
      <nav className="nav-links">
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
        <a href="#overview" onClick={(e) => { e.preventDefault(); scrollToSection('overview'); }}>Overview</a>
        <a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>Features</a>
        <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About Us</a>
        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact Us</a>
      </nav>
      <button
        className="get-started-btn"
        onClick={() => (window.location.href = '/conversion')}
      >
        Getting Started
      </button>
    </header>
  );
};

export default Header;
