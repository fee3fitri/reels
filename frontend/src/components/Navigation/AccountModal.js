import React from 'react';
import { useSelector } from 'react-redux';
import ProfileModal from './ProfileModal';
import LoginFormModal from '../LoginFormModal';
import SignUpFormModal from '../SignUpFormModal';
import './Navigation.css';

const AccountModal = () => {
  let sessionLinks;
  const sessionUser = useSelector(state => state.session.user);

  if (sessionUser) {
    sessionLinks = (
      <ProfileModal user={sessionUser} />
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