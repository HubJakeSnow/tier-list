import React, { useState } from 'react'
import Column from './Column'
import { FaCog } from 'react-icons/fa'
import Modal from './Modal'

const Row = ({ tier, tierColor, columns }) => {
  const [isEditTierFormVisible, setIsEditTierFormVisible] = useState(false);
  const [tierName, setTierName] = useState(tier);
  const [currentTierColor, setCurrentTierColor] = useState(tierColor);

  function toggleEditTierFormVisibility() {
    setIsEditTierFormVisible(!isEditTierFormVisible);
  }

  function handleFormSubmit(newName, newColor) {
    setTierName(newName);
    setCurrentTierColor(newColor);
    toggleEditTierFormVisibility();
  }

  return (
    <div className="row-container">
      <div className="tier-box" style={{ backgroundColor: currentTierColor }}>
        {tierName}
      </div>
      {columns.map((column, index) => (
        <Column key={index} />
      ))}
      <div className="icon-box" onClick={toggleEditTierFormVisibility}>
        <FaCog className="icon" style={{ backgroundColor: 'black' }} size={40} />
      </div>
      {isEditTierFormVisible && <Modal toggleVisibility={toggleEditTierFormVisibility} onSubmit={handleFormSubmit} />}
    </div>
  );
};

export default Row