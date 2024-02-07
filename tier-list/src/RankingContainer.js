import React from 'react';

function RankingContainer({ clubData }) {
  function dragStart(e,index) {
    e.dataTransfer.setData("clubId", index)
  }

  return (
    <div className='ranking-container'>
      {clubData.map((badgeURL, index) => (
        <img
          className='ranking-images'
          key={index} 
          id={index}
          src={badgeURL} 
          style={{ maxHeight: '80px', width: 'auto' }}
          alt='Images to be ranked'
          draggable
          onDragStart={(e)=>dragStart(e,index)}
        />
      ))}
    </div>
  );
}

export default RankingContainer;