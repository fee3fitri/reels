import React, {useState} from 'react';
import { NavLink, Link } from 'react-router-dom';
import AccountModal from './AccountModal';
import './Navigation.css';

function Navigation() {
  const [isHovering, setIsHovering] = useState('false');

  const handleMouseOver = () => {
    setIsHovering(true);
  }

  const handleMouseOut = () => {
    setIsHovering(false);
  }
  
  return (
    <header className='header_navigation flex-row justify-between align-center'>
      <div className='left_nav flex-row' >
        <Link>Women</Link>
        <Link>Men</Link>
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
        <div className='account_menu'
          onMouseEnter={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <i class="fa-solid fa-circle-user"></i>
        </div>
        <i class="fa-solid fa-cart-shopping"></i>

        {isHovering && (
          <AccountModal />
        )}
      </div>
    </header>
  );
}

export default Navigation;
