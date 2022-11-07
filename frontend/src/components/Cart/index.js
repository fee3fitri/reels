import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { loadCartItems } from "../../store/cart_item";
import CartItem from "./CartItem";
import "./Cart.css"

const Cart = () => {
  let sessionCart;
  const dispatch = useDispatch();
  const [hideCart, setHideCart] = useState(false);
  const cartItems = useSelector(loadCartItems);
  const sessionUser = useSelector(state => state.session.user);

  if (!cartItems || !cartItems.length) {
    return (
      <div className="cart">
        No items in the cart.
      </div>
    )
  } else if (!cartItems || !cartItems.length) {
    
  }

  return (
    <div className={`cart flex-col align-center ${hideCart ? 'hide-modal' : ''}`}>
      <div className="cart_header flex-row justify-between align-center">
        <div></div>
        <h1>Your Cart</h1>
        <button onClick={() => setHideCart(true)}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
      <ul className="flex-col">
        {cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem} />)}
      </ul>
    </div>
  )
}

export default Cart;