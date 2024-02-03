import React from 'react'

function RowForm() {
  return (
    <form id='add-row-form'>
      <div className='top-row-container'>
        <h4 className='form-title'>Add A Row</h4>
        <div className='close-form-button'>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
      <div className='color-selector'>Red, Orange, Yellow, Green or Blue</div>
      <label>Tier's Name</label>
      <textarea></textarea>
      <div className='form-button-container'>
        <button className='form-button btn' id='submit-form'>
          Add Row
        </button>
        <button className='form-button btn' id='cancel-form'>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default RowForm