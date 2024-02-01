import React, { useState } from 'react'
import Row from './Row'
import './App.css'

function TierList() {
    const [tierData, setTierData] = useState(['S', 'A', 'B', 'C']);
    const [tierColor, setTierColor] = useState(['Red', 'Orange', 'Yellow', 'Green'])

    function handleEdit(index) {
        console.log(`${tierData[index]} Tier Clicked!`);
    }

    return (
        <div className='tier-list'>
          {tierData.map((tier, index) => (
            <Row
              key={index}
              tier={tier}
              tierColor={tierColor[index]}
              onEdit={() => handleEdit(index)}
            />
          ))}
        </div>
      );
    };

export default TierList