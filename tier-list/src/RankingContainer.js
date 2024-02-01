import React from 'react'

function RankingContainer({ clubData }) {
  return (
    <div className='ranking-container'>
      {clubData.map((badgeURL, index) => (
        <img key={index} src={badgeURL} alt={`Club Badge ${index + 1}`} style={{ maxWidth: '100px' }} />
      ))}
    </div>
  );
}

export default RankingContainer