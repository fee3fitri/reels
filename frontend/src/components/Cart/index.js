import { useDispatch, useSelector } from "react-redux"
import { loadCartItems } from "../../store/cart_item";
import CartItem from "./CartItem";
import "./Cart.css"

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(loadCartItems);

  if (!cartItems || !cartItems.length) {
    return (
      <div className="cart">
        No items in the cart.
      </div>
    )
  }

  return (
    <div className="cart flex-col align-center">
      <div className="cart_header flex-row justify-between align-center">
        <div></div>
        <h1>Your Cart</h1>
        <button>
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