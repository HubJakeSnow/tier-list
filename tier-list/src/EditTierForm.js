import React, { useState } from 'react'

function EditTierForm(props) {
  const [newTierName, setNewTierName] = useState('');
  const [newTierColor, setNewTierColor] = useState('');

  function handleColorSelect(color, event) {
    setNewTierColor(color);

    const spans = document.querySelectorAll('#color-selector span');
    spans.forEach(span => {
      span.classList.remove('selected');
    });
  
    event.target.classList.add('selected');
  }

  function handleEdit(e) {
    e.preventDefault();
    props.onSubmit(newTierName, newTierColor);
  }

  function handleDeletion(e) {
    e.preventDefault();
    console.log("Row deleted");
  }

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
        <span style={{ background: '#FF7F7F' }} onClick={(e) => handleColorSelect('#FF7F7F', e)} ></span>
        <span style={{ background: '#FFBF7F' }} onClick={(e) => handleColorSelect('#FFBF7F', e)} ></span>
        <span style={{ background: '#FFDF7F' }} onClick={(e) => handleColorSelect('#FFDF7F', e)} ></span>
        <span style={{ background: '#FFFF7F' }} onClick={(e) => handleColorSelect('#FFFF7F', e)} ></span>
        <span style={{ background: '#BFFF7F' }} onClick={(e) => handleColorSelect('#BFFF7F', e)} ></span>
        <span style={{ background: '#7FFF7F' }} onClick={(e) => handleColorSelect('#7FFF7F', e)} ></span>
        <span style={{ background: '#7FFFFF' }} onClick={(e) => handleColorSelect('#7FFFFF', e)} ></span>
        <span style={{ background: '#7FBFFF' }} onClick={(e) => handleColorSelect('#7FBFFF', e)} ></span>
        <span style={{ background: '#7F7FFF' }} onClick={(e) => handleColorSelect('#7F7FFF', e)} ></span>
        <span style={{ background: '#FF7FFF' }} onClick={(e) => handleColorSelect('#FF7FFF', e)} ></span>
        <span style={{ background: '#BF7FBF' }} onClick={(e) => handleColorSelect('#BF7FBF', e)} ></span>
        <span style={{ background: '#3B3B3B' }} onClick={(e) => handleColorSelect('#3B3B3B', e)} ></span>
        <span style={{ background: '#858585' }} onClick={(e) => handleColorSelect('#858585', e)} ></span>
        <span style={{ background: '#CFCFCF' }} onClick={(e) => handleColorSelect('#CFCFCF', e)} ></span>
        <span style={{ background: '#F7F7F7' }} onClick={(e) => handleColorSelect('#F7F7F7', e)} ></span>
      </div>
      <label>Tier's Name</label>
      <textarea value={newTierName} onChange={(e) => setNewTierName(e.target.value)}></textarea>
      <div className='form-button-container'>
        <button className='form-button btn' id='submit-form' onClick={handleEdit}>
          Edit Row
        </button>
        <button className='form-button btn' id='cancel-form' onClick={handleDeletion}>
          Delete Row
        </button>
      </div>
    </form>
  );
}

export default EditTierForm