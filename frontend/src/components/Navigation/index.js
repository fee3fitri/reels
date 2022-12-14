import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { loadCartItems } from '../../store/cart_item';
import { Modal } from '../../context/Modal';
import AccountModal from './AccountModal';
import LoginFormModal from '../LoginFormModal/';
import SearchBar from '../Search/SearchBar';
import Cart from '../Cart';
import './Navigation.css';


const Navigation = () => {
  const user = useSelector(state => state.session.user);
  const cartItems = useSelector(loadCartItems);
  const [showModal, setShowModal] = useState(false);

  const calculateItemsNum = () => {
    let total = 0;
    if (!user) return total;

    cartItems.map(cartItem => {
      total += Number(cartItem.quantity);
    })

    return total;
  }

  return (
    <>
      <header className='header_navigation flex-row justify-between align-center'>
        <div className='left_nav flex-row align-center' >
          <Link to="/collections/womens"
            className='collections flex-col align-center'>
            Women
          </Link>
          <Link 
            to="/collections/mens"
            className='collections flex-col align-center'>
            Men
          </Link>
          <SearchBar />
        </div>

        <div className='center_nav text-center'>
          <NavLink exact to="/"><h1>Reels</h1></NavLink>
        </div>

        <div className='right_nav flex-row justify-end align-center'>
          <div className='account_menu flex-row align-center'>
            <i className="fa-solid fa-circle-user"></i>
            <div className='account_content'>
              <AccountModal />
            </div>
          </div>
            <i className="fa-solid fa-cart-shopping"
              onClick={() => setShowModal(true)}></i>
            <p className='cart_number'>{calculateItemsNum()}</p>
        </div>
      </header>

      {showModal && (
        <div className="cart_modal_wrapper">
          <Modal 
            onClose={() => setShowModal(false)}>
            {user ? <Cart showModal={showModal} setShowModal={setShowModal} /> : (
              <div className='cart_modal_login flex-col'>
                <i className="fa-solid fa-xmark"
                  onClick={() => setShowModal(false)}></i>
                <div className='cart_modal_login_content flex-col'>
                  <h1>Your cart</h1>
                  <p>Login to see your cart items</p>
                  <LoginFormModal />
                </div>
              </div>
            )}
          </Modal>
        </div>
      )}
    </>
  );
}

export default Navigation;
