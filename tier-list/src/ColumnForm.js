import React from 'react'

function ColumnForm(props) {
  return (
    <form id='add-column-form'>
      <div className='top-row-container'>
        <h4 className='form-title'>Add A Column</h4>
        <div className='close-form-button' onClick={props.toggleVisibility}>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
      <div className='color-selector'>Red, Orange, Yellow, Green or Blue</div>
      <label>Tier's Name</label>
      <textarea></textarea>
      <div className='form-button-container'>
        <button className='form-button btn' id='submit-form'>
          Add Column
        </button>
        <button className='form-button btn' id='cancel-form' onClick={props.toggleVisibility}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default ColumnForm