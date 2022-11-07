import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from "../../store/session";
import ProfileModal from './ProfileModal';
import LoginFormModal from '../LoginFormModal';
import SignUpFormModal from '../SignUpFormModal';
import './Navigation.css';

const AccountModal = () => {
  let sessionLinks;
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);

  const handleDemoLogin = e => {
    e.preventDefault();
    return dispatch(sessionActions.login({
      email: 'demo@user.com',
      password: 'password'
    }))
  }

  if (sessionUser) {
    sessionLinks = (
      <ProfileModal user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <div className='account_modal flex-col align-start justify-center'>
        <p onClick={handleDemoLogin}>Demo Login</p>
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