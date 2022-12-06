import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
import Divider from "@mui/material/Divider";
import { removeCartItem, updateCartItem } from "../../store/cart_item";

const CartItem = ({cartItem}) => {
  const dispatch = useDispatch();
  let {quantity, productName, price} = cartItem;
  let [count, setCount] = useState(quantity);
  const totalPricePerItem = (price * quantity).toFixed(2);
  const images = cartItem.imageUrl;

  useEffect(() => {
    setCount(quantity);
  }, [quantity]);
  
  const addQuantity = () => {
    dispatch(updateCartItem({...cartItem, quantity: quantity += 1}));
  }

  const subtractQuantity = () => {
    cartItem.quantity === 1 ? 
      dispatch(removeCartItem(cartItem.id)) : 
      dispatch(updateCartItem({...cartItem, quantity: quantity -= 1}));
  }
  
  if (!cartItem) return null;

  return (
    <>
      <li className="cart_item_wrapper flex-row">
        <picture>
          <img src={images} alt={productName} />
        </picture>
        <div className="cart_item_detail flex-col justify-center">
          <div className="flex-row justify-between">
            <h3>{productName}</h3>
            <button onClick={() => dispatch(removeCartItem(cartItem.id))}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <p className="cart_color">Size: {cartItem.size}</p>
          <div className="quantity_price flex-row justify-between">
            <div className="quantity_button flex-row">
              <button onClick={subtractQuantity}> - </button>
              <input 
                className="cart_item_quantity"
                type="text"
                value={Number(count)}
                onChange={e => setCount(e.target.value)}
                onBlur={() => dispatch(updateCartItem({...cartItem, quantity: count}))}
              />
              <button onClick={addQuantity}> + </button>
            </div>
            <p className="cart_subprice">{`$${totalPricePerItem}`}</p>
          </div>
        </div>
      </li>
      <Divider />
    </>
    
  )
}

export default CartItem;