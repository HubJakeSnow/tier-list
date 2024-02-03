import React, { useState } from 'react'
import { FaCog } from 'react-icons/fa'
import Modal from './Modal'

const Row = ({ tier, tierColor }) => {
  const [isEditTierFormVisible, setIsEditTierFormVisible] = useState(false);

  function draggingOver(e) {
    e.preventDefault();
  };

  function dragDropped(e) {
    e.preventDefault();
    let transferedClubId = e.dataTransfer.getData('clubId');
    const droppedImage = document.getElementById(transferedClubId);
    e.target.appendChild(droppedImage);
  };

  function toggleEditTierFormVisibility() {
    setIsEditTierFormVisible(!isEditTierFormVisible);
  };

  return (
    <div className="row-container">
      <div className="tier-box" style={{ backgroundColor: tierColor }}>
        {tier}
      </div>
      <div
        onDragOver={(e) => draggingOver(e)}
        onDrop={(e) => dragDropped(e)}
        className="image-container"
      ></div>
      <div className="icon-box" onClick={toggleEditTierFormVisibility}>
        <FaCog className="icon" style={{ backgroundColor: 'black' }} size={40} />
      </div>
      {isEditTierFormVisible && <Modal />}
    </div>
  );
};

export default Row