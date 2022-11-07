import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import * as sessionActions from "../../store/session";
import { Modal } from '../../context/Modal';
import AccountModal from './AccountModal';
import LoginForm from '../LoginFormModal/';
import LoginFormModal from '../LoginFormModal/';
import Cart from '../Cart'
import './Navigation.css';

const Navigation = () => {
  const user = useSelector(state => state.session.user);
  const [showModal, setShowModal] = useState(false);

  const loginForm = () => {
    return (
      showModal && (
        <div className="video_modal_wrapper">
          <Modal 
            onClose={() => setShowModal(false)}>
            <LoginForm />
          </Modal>
        </div>
      )
    )
  }

  return (
    <>
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
            <i className="fa-solid fa-cart-shopping"
              onClick={() => setShowModal(true)}></i>
        </div>
      </header>

      {showModal && (
        <div className="cart_modal_wrapper">
          <Modal 
            onClose={() => setShowModal(false)}>
            {user ? <Cart /> : (
              <div className='cart_modal_login flex-col'>
                <h1>Your cart</h1>
                <p>Login to see your cart items</p>
                {/* <button 
                  className='btn'
                  onClick={() => setShowModal(true)}
                >
                  Login
                </button> */}
                <LoginFormModal />
              </div>
            )}
          </Modal>
        </div>
      )}

      {}
    </>
  );
}

export default Navigation;
