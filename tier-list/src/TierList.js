import React, { useState } from 'react'
import Row from './Row'
import './App.css'

function TierList({ tierData }) {
    const [tierColor, setTierColor] = useState(['#FF7F7F', '#FFBF7F', '#FFDF7F', '#FFFF7F', '#BFFF7F']);

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