import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct, loadProduct } from "../../store/products";
import './ProductItem.css'


const ProductColor = () => {
  const {productId} = useParams();
  const dispatch = useDispatch();
  const product = useSelector(loadProduct(productId));
  const colors = product.color.toLowerCase().split(' ');
  const [color, setColor] = useState();
  const [isActive, setIsActive] = useState(false);
  const productName = product.name.toLowerCase().split(' ');
  // const colorUpper = color.charAt(0).toUpperCase() + color.slice(1);
  const name = productName[0];

  
  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [dispatch, productId]);
  
  const handleColor = e => {
    setColor(e.target.value);
  }
  
  const handleClick = () => {
    setIsActive(current => !current);
  }

  if (!product) return null;

  return (
    <div className="product_color_wrapper">
      <h3>Colour {color}</h3>
      <ul className="flex-row">
        {colors.map(color =>
        <li>
          <input type="radio"
            name="color"
            value={color}
            id={`color ${color}`}
            onChange={handleColor}
          />
          <label htmlFor={`color ${color}`}>
            <img 
              src={`https://reels-2-dev.s3.us-west-1.amazonaws.com/colors/${name}/${name}_${color}_color.webp`}
              alt={`${name} ${color}`}
              style={{
                border: isActive ? '1px solid white' : ''
              }}
              onClick={handleClick}
            ></img>
          </label>
        </li>
        )}
      </ul>
    </div>
  )
}

export default ProductColor;