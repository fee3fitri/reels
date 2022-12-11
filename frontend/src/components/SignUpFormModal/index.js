import React, {useState} from "react";
import { Modal } from '../../context/Modal';
import SignUpForm from "./SignupForm";

const SignUpFormModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button 
        className='account_button'
        onClick={() => setShowModal(true)}
      >
        Signup
      </button>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignUpForm setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  )
}

export default SignUpFormModal;