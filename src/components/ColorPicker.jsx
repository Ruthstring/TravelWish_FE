import React, { useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import useDragger from '../hooks/useDragger';

const ColorPicker = ({ countryId, countryName, initialColor, onSave, onClose }) => {
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
        top: '40px',
        left: '40px',
        zIndex: 1000,
        cursor: 'grab',
        border: '1px solid #ddd',
        padding: '30px',
        backgroundColor: 'white',
        borderRadius: '5px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 className="mb-5">{countryName}</h1>
        </div>
        <button 
          onClick={onClose} 
          style={{
            background: 'none', 
            border: 'none', 
            cursor: 'pointer',
            position: 'absolute',
            top: '15px',
            right: '15px',
            color: '#333'
          }
         
        }
        >
          <FontAwesomeIcon icon={faTimes} className="w-6 h-6" />
        </button>
      </div>
      <HexColorPicker color={color} onChange={setColor} />
      <button 
        onClick={handleSave} 
       className="btn-primary mt-6"
      >
        Save Color
      </button>
    </div>
  );
};

export default ColorPicker;

