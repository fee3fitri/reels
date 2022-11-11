import React from "react";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import '../../context/Modal.css'
import './Navigation.css'

const ProfileModal = ({user}) => {
  const dispatch = useDispatch();
 
  const logout = e => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <div className="profile_modal_container">
      <div className="profile_content">
        <h2>Hi, {user.name}!</h2>
        <p className="text-center">Click here to start shopping</p>
        <Link to="/collections/womens"
          className='btn flex-col align-center'>
          Women
        </Link>
        <Link 
          to="/collections/mens"
          className='btn flex-col align-center'
        >
          Men
        </Link>
        <button 
          onClick={logout}
          className="btn">
          Log Out
        </button>
      </div>
    </div>
  );
}

export default ProfileModal;
