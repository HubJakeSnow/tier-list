import React from 'react'

function RowForm() {
  return (
    <form add-row-form>
      <h4 className='form-title'>Add A New Row</h4>
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