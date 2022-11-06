import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import AccountModal from './AccountModal';
import './Navigation.css';

const Navigation = () => {
  return (
    <header className='header_navigation flex-row justify-between align-center'>
      <div className='left_nav flex-row align' >
        <Link to="/collections/womens"
          className='collections flex-col align-center'>
          Women
        </Link>
        <Link 
          to="/collections/mens"
          className='flex-col align-center'
          >
          Men
        </Link>
      </div>

      <div className='center_nav text-center'>
        <NavLink exact to="/"><h1>Reels</h1></NavLink>
      </div>

      <div className='right_nav flex-row justify-end'>
        <Link to={{ pathname: "https://www.linkedin.com/in/safitri-shelton/" }} target="_blank">
          <i className="fa-brands fa-github"></i>
        </Link>
        <Link to={{ pathname: "https://www.linkedin.com/in/safitri-shelton/" }} target="_blank">
          <i className="fa-brands fa-linkedin"></i>
        </Link>
        <div className='account_menu'>
          <i className="fa-solid fa-circle-user"></i>
          <div className='account_content'>
            <AccountModal />
          </div>
        </div>
        <i className="fa-solid fa-cart-shopping"></i>
      </div>
    </header>
  );
}

export default Navigation;
