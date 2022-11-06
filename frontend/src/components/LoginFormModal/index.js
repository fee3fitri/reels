import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';

const LoginFormModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button 
        className='account_button'
        onClick={() => setShowModal(true)}
      >
        Login
      </button>

      {showModal && (
        <div className="video_modal_wrapper">
          <Modal 
            onClose={() => setShowModal(false)}>
            <LoginForm />
          </Modal>
        </div>
        
      )}
    </>
  );
}

export default LoginFormModal;