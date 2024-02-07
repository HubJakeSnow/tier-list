import React, { useState } from 'react'
import Row from './Row'
import './App.css'

function TierList({ tierData }) {
    const [tierColor, setTierColor] = useState(['Red', 'Orange', 'Yellow', 'Green', 'Blue']);

    // FUNCTION NO LONGER WORKING
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