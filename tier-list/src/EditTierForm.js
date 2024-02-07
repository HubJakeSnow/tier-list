import React from 'react'

function EditTierForm(props) {
  return (
    <form id='edit-row-form'>
      <div className='top-row-container'>
        <h4 className='form-title'>Edit Row</h4>
        <div className='close-form-button' onClick={props.toggleVisibility}>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
      <div id='color-selector'>
        <span style={{ background: '#FF7F7F' }}></span>
        <span style={{ background: '#FFBF7F' }}></span>
        <span style={{ background: '#FFDF7F' }}></span>
        <span style={{ background: '#FFFF7F' }}></span>
        <span style={{ background: '#BFFF7F' }}></span>
        <span style={{ background: '#7FFF7F' }}></span>
        <span style={{ background: '#7FFFFF' }}></span>
        <span style={{ background: '#7FBFFF' }}></span>
        <span style={{ background: '#7F7FFF' }}></span>
        <span style={{ background: '#FF7FFF' }}></span>
        <span style={{ background: '#BF7FBF' }}></span>
        <span style={{ background: '#3B3B3B' }}></span>
        <span style={{ background: '#858585' }}></span>
        <span style={{ background: '#CFCFCF' }}></span>
        <span style={{ background: '#F7F7F7' }}></span>
      </div>
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