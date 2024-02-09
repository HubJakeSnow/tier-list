import React from 'react';

function Column() {
  function draggingOver(e) {
    e.preventDefault();
  };

  function dragDropped(e) {
    e.preventDefault();
    let transferedClubId = e.dataTransfer.getData('clubId');
    const droppedImage = document.getElementById(transferedClubId);
    e.target.appendChild(droppedImage);
  };

  return (
    <div className="image-container"
      onDragOver={(e) => draggingOver(e)}
      onDrop={(e) => dragDropped(e)}>
    </div>
  );
};

export default Column;