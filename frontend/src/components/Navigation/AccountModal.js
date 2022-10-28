import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
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
        <NavLink to="/signup">Sign Up</NavLink>
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