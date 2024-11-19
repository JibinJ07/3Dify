// src/pages/Conversion.js
import React, { useState } from 'react';
import './Conversion.css';

const Conversion = () => {
  const [numFloors, setNumFloors] = useState(1);
  const [floorsData, setFloorsData] = useState([{ file: null, dimensions: { length: '', width: '', height: '' } }]);

  const handleNumFloorsChange = (e) => {
    const value = parseInt(e.target.value, 10) || 1;
    setNumFloors(value);

    const updatedFloors = Array.from({ length: value }, (_, i) => {
      return floorsData[i] || { file: null, dimensions: { length: '', width: '', height: '' } };
    });
    setFloorsData(updatedFloors);
  };

  const handleFileChange = (index, file) => {
    const updatedFloors = [...floorsData];
    updatedFloors[index].file = file;
    setFloorsData(updatedFloors);
  };

  const handleDimensionChange = (index, dimension, value) => {
    const updatedFloors = [...floorsData];
    updatedFloors[index].dimensions[dimension] = value;
    setFloorsData(updatedFloors);
  };

  const handleConvert = () => {
    console.log('Conversion Request:', floorsData);
    alert('Conversion process started! (Check console for details)');
  };

  return (
    <div className="conversion-page">
      <header className="header">
        <div className="logo">3Dify</div>
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
      </header>

      <main className="conversion-main">
        <h2>Convert 2D Blueprints to 3D Models</h2>
        <div className="form-group">
          <label htmlFor="numFloors">Number of Floors:</label>
          <input
            type="number"
            id="numFloors"
            value={numFloors}
            onChange={handleNumFloorsChange}
            min="1"
          />
        </div>

        {floorsData.map((floor, index) => (
          <div className="floor-group" key={index}>
            <h3>Floor {index + 1}</h3>
            <div className="form-group">
              <label>Upload Blueprint:</label>
              <input
                type="file"
                onChange={(e) => handleFileChange(index, e.target.files[0])}
              />
            </div>
            <div className="dimension-group">
              <div className="form-group">
                <label>Length (m):</label>
                <input
                  type="number"
                  value={floor.dimensions.length}
                  onChange={(e) => handleDimensionChange(index, 'length', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Width (m):</label>
                <input
                  type="number"
                  value={floor.dimensions.width}
                  onChange={(e) => handleDimensionChange(index, 'width', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Height (m):</label>
                <input
                  type="number"
                  value={floor.dimensions.height}
                  onChange={(e) => handleDimensionChange(index, 'height', e.target.value)}
                />
              </div>
            </div>
          </div>
        ))}

        <button className="convert-btn" onClick={handleConvert}>Convert</button>
      </main>
    </div>
  );
};

export default Conversion;
