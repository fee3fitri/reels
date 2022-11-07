import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import * as sessionActions from "../../store/session";
import { Modal } from '../../context/Modal';
import AccountModal from './AccountModal';
import LoginFormModal from '../LoginFormModal/';
import { fetchCartItems, getCartOrder, loadCartItems } from '../../store/cart_item';
import { fetchProducts } from '../../store/products';
import Cart from '../Cart';
import './Navigation.css';

const Navigation = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  const cartItems = useSelector(loadCartItems);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (user) dispatch(fetchCartItems(user));
    dispatch(fetchProducts());
  }, [dispatch, cartItems.length]);

  const itemsNum = () => {
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

        <div className='right_nav flex-row justify-end align-center'>
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
            <p className='cart_number'>{itemsNum()}</p>
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
                <LoginFormModal />
              </div>
            )}
          </Modal>
        </div>
      )}
    </>
  );
}

export default Navigation;
