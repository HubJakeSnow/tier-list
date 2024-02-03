import React from 'react'
import Row from './Row';

function EditTierForm() {
  return (
    <form edit-row-form>
      <div className='top-row-container'>
        <h4 className='form-title'>Edit Row</h4>
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
          Edit Row
        </button>
        <button className='form-button btn' id='cancel-form'>
          Delete Row
        </button>
      </div>
    </form>
  );
}

export default EditTierForm