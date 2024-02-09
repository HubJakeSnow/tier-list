import React, { useEffect } from 'react'
import EditTierForm from './EditTierForm'

function Modal({ toggleVisibility, onSubmit }) {

  useEffect(() => {
    document.body.classList.add('modal-open');
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, []);

  return (
    <div id='modal'>
      <EditTierForm toggleVisibility={toggleVisibility} onSubmit={onSubmit} />
    </div>
  );
}

export default Modal