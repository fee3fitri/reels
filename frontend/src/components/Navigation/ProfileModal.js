import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
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
        <div className="title_area flex-row justify-between align-center">
          <h2>Profile</h2>
        </div>
        <form className="login_form flex-col">
          <label className="flex-col">
            Email
            <input
              type="email"
              value={user.email}
            />
          </label>
          <label className="flex-col">
            Name
            <input
              type="text"
              value={user.name}
            />
          </label>
          <button 
            onClick={logout}
            className="btn"
          >
            Log Out
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProfileModal;
