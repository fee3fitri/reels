import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { fetchCartItems, removeCartItem } from "../../store/cart_item";
import { Modal } from "../../context/Modal";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import "./Cart.css"

const Cart = ({showModal, setShowModal}) => {
  const dispatch = useDispatch();
  const [showCheckout, setShowCheckout] = useState(false);
  const [hideCart] = useState(false);
  
  const cartItems = useSelector(state => Object.values(state.cartItems));
  const sessionUser = useSelector(state => state.session.user);

  useEffect(() => {
    dispatch(fetchCartItems(sessionUser.id));
  }, [dispatch, cartItems.length, sessionUser.id]);

  const subtotal = () => {
    if (cartItems) {
      const priceQuantity = cartItems.map(item => (item.price) * (item.quantity));
      return priceQuantity.reduce((a, b) => a + b).toFixed(2);
    }
  }

  if (!cartItems || !cartItems.length) {
    return (
      <div className="empty_cart text-center">
        <h1>Your Cart</h1>
        <p>Your cart is empty!</p>
        <Link onClick={() => setShowModal(false)}
          to="/collections/womens"
          className={`btn flex-col align-center`}>
          Women
        </Link>
        <Link 
          to="/collections/mens"
          onClick={() => setShowModal(false)}
          className={`btn flex-col align-center`}>
          Men
        </Link>
      </div>
    )
  }


  return (
    <>
      <div className={`cart flex-col align-center ${hideCart ? 'hide-modal' : ''}`}>
        <h1>Your Cart</h1>
        <ul className="flex-col">
          {cartItems.map((cartItem, idx) => <CartItem key={idx} cartItem={cartItem} />)}
        </ul>
      </div>

      <div className="cart_total text-center">
        <h2>Subtotal: ${subtotal()}</h2>
        <p>&#91;&#34;Free express shipping on all shoe orders&#34;&#93;</p>
        <button 
          className="btn"
          onClick={() => {
            setShowCheckout(true);
          }}>
          Checkout
        </button>
      </div>

      {showCheckout && (
        <div className="checkout_modal_wrapper">
          <Modal onClose={() => setShowCheckout(false)}>
            <Checkout showModal={showModal} setShowModal={setShowModal} />
          </Modal>
        </div>
      )}
    </>
  )
}

export default Cart;