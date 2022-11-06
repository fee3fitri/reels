import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams,Link } from "react-router-dom";
import { fetchProduct, loadProduct, toggleSize } from "../../store/products";
import './ProductItem.css'


const ProductColor = () => {
  const {productId} = useParams();
  const dispatch = useDispatch();
  const product = useSelector(loadProduct(productId));
  const [color, setColor] = useState();
  const colors = product.color.split(' ');
  const productName = product.name.toLowerCase().split(' ');
  const productFile = productName.join('_');
  const name = productName[0];
  const colorUrl = `https://reels-dev.s3.us-west-1.amazonaws.com/${name}/${productFile}_color.webp`;

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
        {colors.map(color => {
          debugger
          <li>
            <Link to="/products/productId">
              <input type="radio"
                name="color"
                value={color}
                id={`color ${color}`}
                onChange={handleColor}
              />
              <label for={`color ${color}`}>
                <img src={colorUrl} 
                  alt={product} />
                {color}
              </label>
            </Link>
          </li>
        })}
      </ul>
    </div>
  )
}

export default ProductColor;