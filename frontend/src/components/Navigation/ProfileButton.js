import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [hideAccount, setHideAccount] = useState(true);
 
  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <div className={`profile_modal_container`}>
      <div className="profile_content">
        <div className="title_area flex-row justify-between align-center">
          <h2>Profile</h2>
          <i 
            className="fa-solid fa-x"
            onClick={() => setHideAccount(false)}>  
          </i>
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
            className="btn"
            >
            Edit Profile
          </button>
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

export default ProfileButton;
