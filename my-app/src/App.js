// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Conversion from './pages/Conversion';
import './App.css';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {/* Render Header only if not on Conversion Page */}
      {location.pathname !== '/conversion' && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conversion" element={<Conversion />} />
      </Routes>
      {/* Render Footer only if not on Conversion Page */}
      {location.pathname !== '/conversion' && <Footer />}
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
