import React from 'react'
import EditTierForm from './EditTierForm'

function Modal(props) {
  return (
    <div id='modal'>
      <EditTierForm toggleVisibility={props.toggleVisibility} />
    </div>
  );
}

export default Modal