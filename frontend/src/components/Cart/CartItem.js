import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
import Divider from "@mui/material/Divider";
import { removeCartItem, updateCartItem } from "../../store/cart_item";

const CartItem = ({cartItem}) => {
  const dispatch = useDispatch();
  const {productId, quantity, productName, price} = cartItem;
  const [count, setCount] = useState(quantity);
  const totalPricePerItem = (price * count).toFixed(2);
  
  useEffect (() => {
    dispatch(updateCartItem({...cartItem, quantity: count}))
  }, [dispatch, cartItem, count]);
  
  if (!cartItem) return null;
  const images = cartItem.imageUrl;

  const handleChange = e => {
    let input = parseInt(e.target.value)
    input > 0 ? setCount(input) : setCount("");
  }


  return (
    <>
      <li className="cart_item_wrapper flex-row">
        <picture>
          <img src={images} alt={productName} />
        </picture>
        <div className="cart_item_detail flex-col justify-center">
          <div className="flex-row justify-between">
            <h3>{productName}</h3>
            <button onClick={() => dispatch(removeCartItem(cartItem.id, productId))}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <p className="cart_color">Size {cartItem.size}</p>
          
          <p className="cart_color">Amount {count}</p>
          <div className="quantity_price flex-row justify-between">
            <div className="quantity_button flex-row">
              <button onClick={() => (parseInt(count) - 1) > 0 ? setCount(parseInt(count) - 1) : setCount(1)}> - </button>
              <input 
                className="cart_item_quantity"
                type="text"
                value={Number(count)}
                onChange={handleChange}
                onBlur={() => dispatch(updateCartItem(productId, count))} />
              <button onClick={() =>setCount(parseInt(count) + 1)}> + </button>
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