import React from 'react'
import { FaCog } from 'react-icons/fa'

const Row = ({ tier, tierColor, onEdit }) => {
  const draggingOver=(e)=> {
    e.preventDefault()
    console.log("Dragging over now")
  }

  const dragDropped = (e) => {
    e.preventDefault();
  
    let transferedClubId = e.dataTransfer.getData('clubId');
    console.log(`You have dropped ${transferedClubId} in ${tier} tier`);
  
    // Get the image element based on the dragged clubId
    const droppedImage = document.getElementById(transferedClubId);
  
    // Append the image to the image-container in this row
    e.target.appendChild(droppedImage);
  };
  

  return (
    <div className="row-container">
      <div className="tier-box" style={{backgroundColor: tierColor}}>{tier}</div>
      <div
        onDragOver={(e) => draggingOver(e)}
        onDrop={(e)=>dragDropped(e)}
        className="image-container">
      </div>
      <div className="icon-box" onClick={onEdit}>
        <FaCog className="icon" style={{backgroundColor: 'black'}} size={40} />
      </div>
    </div>
  );
};

export default Row