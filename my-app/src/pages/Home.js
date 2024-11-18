import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <section id="home" className="hero section">
        <h1>Welcome to <span className="highlight">3Dify</span></h1>
        <p>Your ultimate 3D content converter, designed to make file transformations seamless and powerful.</p>
      </section>

      <section id="overview" className="content-section section">
        <h2>Overview</h2>
        <p>
          3Dify is your go-to tool for transforming everyday files into stunning 3D visuals. 
          From CAD files to creative 3D designs, we've got you covered with an intuitive, user-friendly interface.
        </p>
      </section>

      <section id="features" className="content-section section">
        <h2>Features</h2>
        <p>
          Experience high-quality conversions with customizable options tailored to your needs. 
          Unlock a range of features including resolution enhancements, format compatibility, and AI-based optimizations.
        </p>
      </section>

      <section id="about" className="content-section section">
        <h2>About Us</h2>
        <p>
          We are a passionate team of developers, designers, and visionaries dedicated to revolutionizing 
          the world of 3D content creation. At 3Dify, innovation and simplicity go hand in hand.
        </p>
      </section>
    </div>
  );
};

export default Home;
