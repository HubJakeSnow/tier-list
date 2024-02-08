import React from 'react'
import EditTierForm from './EditTierForm'

function Modal({ toggleVisibility, onSubmit }) {
  return (
    <div id='modal'>
      <EditTierForm toggleVisibility={toggleVisibility} onSubmit={onSubmit} />
    </div>
  );
}

export default Modal