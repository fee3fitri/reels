import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchCartItems, loadCartItems } from "../../store/cart_item";
import { fetchProduct } from "../../store/products";
import CartItem from "../CartItem";

const Cart = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(state => state.session.user);
  const cartItems = useSelector(loadCartItems);
  const [amount, setAmount] = useState(0);
  const {id, productId, quantity} = cartItems;

  let sessionCart;

  const login = () => {

  }

  useEffect(() => {
    dispatch(fetchProduct(productId));
    if (user) dispatch(fetchCartItems);
  }, [dispatch, productId]);

  if (user) {
    sessionCart = () => {
      <div className="cart_items">
        if (cartItems.length === 0) {
          "Your cart is empty"
        } else {
          cartItems.map(cartItem => {
            <CartItem 
              key={cartItem.id} 
              cartItem={cartItem} 
              setAmount={setAmount} 
            />
          })
        }
        <button 
          className="btn"
          onClick={login}
        >
          Login to Cart
        </button>
      </div>
    }
  } else {

  }

  return (
    <div className="cart-modal">
      <h2>Your Cart</h2>
      <CartItem />
    </div>
  );
}

export default Cart;