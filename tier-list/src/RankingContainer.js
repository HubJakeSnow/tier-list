import React from 'react'

function RankingContainer({ clubData }) {
  const dragStarted=(e,index)=>{
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
          style={{ maxWidth: '80px' }}
          alt='Images to be ranked'
          draggable
          onDragStart={(e)=>dragStarted(e,index)}
        />
      ))}
    </div>
  );
}

export default RankingContainer