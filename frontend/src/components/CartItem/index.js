import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { loadProduct } from "../../store/products";

const CartItem = ({cartItem}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(state => sessionStorage.user);
  const {id, productId, quantity} = cartItem;
  const product = useSelector(loadProduct(cartItem.productId));
  const [count, setCount] = useState(quantity);
  // const [removedItem, setRemovedItem] = useState(false);

  if (!user) return history.push("/signup");
  if (!product) return null;

  const images = product.imgUrls;
  const img = images[0];
  const {name, category, color, size, price} = product;

  const handleChange = e => {
    let input = parseInt(e.target.value)
    input > 0 ? setCount(input) : setCount("");
  }


  return (
    <div className="cart_item_wrapper flex-row">
      <picture>
        <img src={img} alt={name} />
      </picture>
      <div className="cart_item_detail flex-col">
        <h3>{name}</h3>
        <p>{category} Shoes</p>
        <p>Color: {color}</p>
        <p>Size: {size}</p>
      </div>
      <div className="quantity_button flex-row">
        <button 
          onClick={() => (parseInt(count) - 1) > 0 ? setCount(parseInt(count) - 1) : setCount(1)}
        > - </button>
        <input 
          id="cart_item_quantity"
          type="number"
          value={count}
          onChange={handleChange} />
        <button onClick={() => setCount(parseInt(count) + 1)}> + </button>
      </div>
      <div className="cart_price">
        <i className="fa-solid fa-xmark"></i>
        <p>{`$${price * count}`}</p>
      </div>
    </div>
  )
}

export default CartItem;