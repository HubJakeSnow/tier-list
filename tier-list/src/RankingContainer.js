import React from 'react'

function RankingContainer({ clubData }) {
  const dragStarted=(e,index)=>{
    console.log("Drag started")
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
          alt='Images to be ranked' // Can this be changed so that the name of the club is read out?
          draggable
          onDragStart={(e)=>dragStarted(e,index)}
        />
      ))}
    </div>
  );
}

export default RankingContainer