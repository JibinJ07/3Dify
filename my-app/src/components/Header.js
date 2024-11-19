// src/components/Header.js
import React from 'react';
import './Header.css';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="logo">3Dify</div>
      {location.pathname === '/conversion' ? (
        <nav>
          <a
            href="/"
            className="home-link"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = '/';
            }}
          >
            Home
          </a>
        </nav>
      ) : (
        <>
          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#overview">Overview</a>
            <a href="#features">Features</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact Us</a>
          </nav>
          <button
            className="get-started-btn"
            onClick={() => (window.location.href = '/conversion')}
          >
            Getting Started
          </button>
        </>
      )}
    </header>
  );
};

export default Header;
