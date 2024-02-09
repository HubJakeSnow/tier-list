import React from 'react'
import Row from './Row'
import './App.css'

const TierList = ({ tierData }) => {
  return (
    <div className='tier-list'>
      {tierData.map((tier, index) => (
        <Row
          key={index}
          tier={tier.name}
          tierColor={tier.color}
          columns={tier.columns}
        />
      ))}
    </div>
  );
};

export default TierList