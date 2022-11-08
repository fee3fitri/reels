import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { fetchCartItems } from "../../store/cart_item";
import CartItem from "./CartItem";
import "./Cart.css"

const Cart = () => {
  let sessionCart;
  const dispatch = useDispatch();
  const [hideCart, setHideCart] = useState(false);
  // const cartItems = useSelector(loadCartItems);
  const cartItems = useSelector(state => Object.values(state.cartItems));
  
  const sessionUser = useSelector(state => state.session.user);

  useEffect(() => {
    dispatch(fetchCartItems(sessionUser.id));
    console.log(cartItems);
  }, [sessionUser.id]);

  if (!cartItems || !cartItems.length) {
    return (
      <div className="empty_cart text-center">
        <h1>Your Cart</h1>
        <p>Your cart is empty!</p>
        <Link to="/collections/womens"
          className='btn flex-col align-center'>
          Women
        </Link>
        <Link 
          to="/collections/mens"
          className='btn flex-col align-center'
        >
          Men
        </Link>
      </div>
    )
  }

  return (
    <div className={`cart flex-col align-center justify-center ${hideCart ? 'hide-modal' : ''}`}>
      <h1>Your Cart</h1>
      <ul className="flex-col">
        {cartItems.map((cartItem, idx) => <CartItem key={idx} cartItem={cartItem} />)}
      </ul>
    </div>
  )
}

export default Cart;