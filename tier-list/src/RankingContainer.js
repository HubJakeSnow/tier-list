import React from 'react'

function RankingContainer({ clubData }) {
  return (
    <div className='ranking-container'>
      {clubData.map((badgeURL, index) => (
        <img
          key={index} 
          src={badgeURL} 
          style={{ maxWidth: '80px' }}
        />
      ))}
    </div>
  );
}

export default RankingContainer