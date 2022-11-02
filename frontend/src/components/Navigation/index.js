import React, {useState} from 'react';
import { NavLink, Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import AccountModal from './AccountModal';
import './Navigation.css';

function Navigation() {
  const [isHovering, setIsHovering] = useState('false');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = e => {
    setAnchorEl(e.currentTarget);
  }
  
  return (
    <header className='header_navigation flex-row justify-between align-center'>
      <div className='left_nav flex-row' >
        <Link to="/collections/womens">Women</Link>
        {/* <Link>Men</Link> */}
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
        <div className='account_menu' onClick={handleClick}>
          <i className="fa-solid fa-circle-user"></i>
        </div>
        <i className="fa-solid fa-cart-shopping"></i>


        {/* {isHovering && (
          <AccountModal />
        )} */}
      </div>
    </header>
  );
}

export default Navigation;
