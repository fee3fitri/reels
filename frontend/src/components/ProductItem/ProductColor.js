import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams,Link } from "react-router-dom";
import { fetchProduct, loadProduct, loadProducts, toggleSize } from "../../store/products";
import './ProductItem.css'


const ProductColor = () => {
  const {productId} = useParams();
  const dispatch = useDispatch();
  const product = useSelector(loadProduct(productId));
  const colors = product.color.toLowerCase().split(' ');
  const [color, setColor] = useState();
  const productName = product.name.toLowerCase().split(' ');
  const name = productName[0];


  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [dispatch, productId]);

  const handleColor = e => {
    setColor(e.target.value);
  }

  if (!product) return null;

  return (
    <div className="product_color_wrapper">
      <h3>Colours</h3>
      <ul className="flex-row">
        {colors.map(color =>
        <li>
          <input type="radio"
            name="color"
            value={color}
            id={`color ${color}`}
            onChange={handleColor}
          />
          <label for={`color ${color}`}>
            <img 
              src={`https://reels-dev.s3.us-west-1.amazonaws.com/${name}/${name}_${color}_color.webp`}
              alt={`${name} ${color}`}
            ></img>
          </label>
        </li>
        )}
      </ul>
    </div>
  )
}

export default ProductColor;