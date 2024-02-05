import React, { useState } from 'react';

function RowForm(props) {
  const [newTierName, setNewTierName] = useState('');

  function submitForm(e) {
    if (e) {
      e.preventDefault();
    }
    console.log(`New row added, named: ${newTierName}`);
    // Additional logic for handling the new tier name
  }

  return (
    <form id='add-row-form'>
      <div className='top-row-container'>
        <h4 className='form-title'>Add A Row</h4>
        <div className='close-form-button' onClick={props.toggleVisibility}>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
      <div className='color-selector'>Red, Orange, Yellow, Green or Blue</div>
      <label>Tier's Name</label>
      <textarea value={newTierName} onChange={(e) => setNewTierName(e.target.value)}></textarea>
      <div className='form-button-container'>
        <button className='form-button btn' id='submit-form' onClick={(e) => { submitForm(e); props.toggleVisibility(); }}>
          Add Row
        </button>
        <button className='form-button btn' id='cancel-form' onClick={props.toggleVisibility}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default RowForm