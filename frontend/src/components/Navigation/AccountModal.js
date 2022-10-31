import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Modal } from '../../context/Modal';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignUpFormModal from '../SignUpFormModal';
import './Navigation.css';

function AccountModal() {
  let sessionLinks;
  const sessionUser = useSelector(state => state.session.user);

  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <div className='account_modal flex-col align-start justify-center'>
        <LoginFormModal />
        <SignUpFormModal />
      </div>
    );
  }

  return (
    <>
      {sessionLinks}
    </>
  )
}

export default AccountModal;