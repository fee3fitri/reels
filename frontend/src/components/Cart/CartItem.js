import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Divider from "@mui/material/Divider";
import { loadProduct } from "../../store/products";
import { removeCartItem, updateCount } from "../../store/cart_item";

const CartItem = ({cartItem}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(state => state.session.user);
  const {productId, quantity} = cartItem;
  
  const product = useSelector(loadProduct(productId));
  const [count, setCount] = useState(quantity);
  if (!product) return null;
  
  const images = product.imgUrls;
  const img = images[0];
  const {name, category, size, price} = product;

  const handleChange = e => {
    let input = parseInt(e.target.value)
    input > 0 ? setCount(input) : setCount("");
  }


  return (
    <>
      <li className="cart_item_wrapper flex-row">
        <picture>
          <img src={img} alt={name} />
        </picture>
        <div className="cart_item_detail flex-col justify-center">
          <div className="flex-row justify-between">
            <h3>{name}</h3>
            <button onClick={() => dispatch(removeCartItem(cartItem.id, productId))}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <p className="cart_category">{category} Shoes</p>
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
                onBlur={() => dispatch(updateCount(productId, count))} />
              <button onClick={() =>setCount(parseInt(count) + 1)}> + </button>
            </div>
            <p className="cart_subprice">{`$${(price * count).toFixed(2)}`}</p>
          </div>
        </div>
      </li>
      <Divider />
    </>
    
  )
}

export default CartItem;