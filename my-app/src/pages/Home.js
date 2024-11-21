// src/pages/Home.js
import React from 'react';
import './Home.css';

const teamMembers = [
  {
    name: 'Aryan Brahmane',
    position: 'Frontend Developer',
    contribution:
      'Aryan is a proficient UX designer and front-end developer focused on creating intuitive, user-centered interfaces.',
    image: '/images/aryan.jpg', // Replace with actual image path
  },
  {
    name: 'Sophia Dsilva',
    position: 'Interface Designer',
    contribution:
      'Sophia ensures the application’s interface is both aesthetically pleasing and intuitive for end users.',
    image: '/images/sophia.jpg',
  },
  {
    name: 'Shahiil Shet',
    position: '3D Modeling Engineer',
    contribution:
      'Shahil implements algorithms for 3D rendering and spatial transformations, ensuring the seamless generation of precise 3D models.',
    image: '/images/shahiil.jpg',
  },
  {
    name: 'Raghav Shrivastav',
    position: '3D Modeling Engineer',
    contribution:
      'Raghav specializes in computational geometry and 3D rendering for transforming blueprints into interactive 3D walkthroughs.',
    image: '/images/raghav.jpg',
  },
  {
    name: 'Jibin Joseph',
    position: 'UX Workflow Architect',
    contribution:
      'Jibin optimizes user workflows and interaction design, ensuring the software delivers seamless, user-centric functionality.',
    image: '/images/jibin.jpg',
  },
  
  {
    name: 'Atharva Chavan',
    position: 'AI Systems Architect',
    contribution:
      'Atharva designs and trains AI systems for tasks like structural analysis and risk assessment, driving advanced AI capabilities.',
    image: '/images/atharva.jpg',
  },
  
];

const Home = () => {
  return (
    <div className="home-container">
      <section id="home" className="hero section">
        <h1>Welcome to <span className="highlight">3Dify</span></h1>
        <p>Your ultimate 2D to 3D content converter, designed to make file transformations seamless and powerful.</p>
      </section>

      <section id="overview" className="content-section section">
        <h2>Overview</h2>
        <p>
        3Dify is a 2D-to-3D Blueprint Converter which  is a standalone software application designed to enhance operational efficiency for National Security Guard (NSG) personnel. The app converts 2D architectural blueprints into interactive 3D walkthrough models, enabling commanders and ground forces to better understand and navigate target layouts during mission planning. 

        </p>
      </section>

      <section id="features" className="features-section section">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="card-front">
              <h3>Advanced Rendering</h3>
            </div>
            <div className="card-back">
              <p>
              Automatically processes 2D blueprints, detects and renders structural elements like walls, doors, and windows with exceptional precision.
              </p>
            </div>
          </div>
          <div className="feature-card">
            <div className="card-front">
              <h3>Immersive Walkthroughs</h3>
            </div>
            <div className="card-back">
              <p>
              Generates immersive, interactive 3D models with realistic structural visualization. Allows users to explore the layout with ease, enhancing situational awareness.

              </p>
            </div>
          </div>
          <div className="feature-card">
            <div className="card-front">
              <h3>Exceptional Models</h3>
            </div>
            <div className="card-back">
              <p>
              Accepts manual input for critical details such as dimensions, entry/exit points, and staircases. Offers flexibility to fine-tune the model to match actual building specifications.

              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="content-section section">
        <h2>About Us</h2>
        <p>
          We, Team ByteForce, are a passionate team of developers, designers, and visionaries dedicated to revolutionizing the world of
          3D content creation. At 3Dify, innovation and simplicity go hand in hand.
        </p>

        <div className="team-section">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <div className="image-container">
                <img src={member.image} alt={member.name} className="team-image" />
              </div>
              <h3 className="team-name">{member.name}</h3>
              <p className="team-position">{member.position}</p>
              <p className="team-contribution">{member.contribution}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
