import React from 'react';
import { FaCog } from 'react-icons/fa';

const Row = ({ tier, tierColor, onEdit }) => {
  return (
    <div className="row-container">
      <div className="tier-box" style={{backgroundColor: tierColor}}>{tier}</div>
      <div className="image-container"> {/* This is where the images will go */}</div>
      <div className="icon-box" onClick={onEdit}>
        <FaCog className="icon" style={{backgroundColor: 'black'}} size={40} />
      </div>
    </div>
  );
};

export default Row;