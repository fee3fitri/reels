import { useDispatch, useSelector } from "react-redux"
import { loadCartItems } from "../../store/cart_item";
import CartItem from "../CartItem";

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
    <div className="cart">
      <ul>
        {cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem} />)}
      </ul>
    </div>
  )
}

export default Cart;