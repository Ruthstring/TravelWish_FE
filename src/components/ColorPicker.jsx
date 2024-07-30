import React, { useState, useRef } from 'react';
import { HexColorPicker } from 'react-colorful';
import useDragger from '../hooks/useDragger';


const ColorPicker = ({ countryId, countryName, initialColor, onSave, onClose}) => {
    const [color, setColor] = useState(initialColor || '#ffffff');
    const pickerId = `color-picker-${countryId}`;
  
    useDragger(pickerId);
  
    const handleSave = () => {
      onSave(countryId, color);
    };
  
    return (
      <div
        id={pickerId}
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          zIndex: 1000,
          cursor: 'grab',
          border: '1px solid #ddd', // Optional: adds a border for better visibility
          padding: '10px', // Optional: adds padding around the color picker
          backgroundColor: 'white', // Optional: sets a background color
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>{countryName}</h1>
        <h3>Choose a color</h3>
        <button onClick={onClose} style={{ marginLeft: '10px' }}>Close</button>
      </div>
        <HexColorPicker color={color} onChange={setColor} />
        <button onClick={handleSave}>Save Color</button>
      </div>
    );
  };
  
  export default ColorPicker;

