import React from 'react'

function ColumnForm(props) {

  function addColumn(e) {
    e.preventDefault()
    console.log("Column added")
  }

  return (
    <form id='add-column-form'>
      <div className='top-row-container'>
        <h4 className='form-title'>Add A Column</h4>
        <div className='close-form-button' onClick={props.toggleVisibility}>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
      <label>Column's Name</label>
      <textarea></textarea>
      <div className='form-button-container'>
        <button className='form-button btn' id='submit-form' onClick={(e) => { addColumn(e); props.toggleVisibility(); }}>
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