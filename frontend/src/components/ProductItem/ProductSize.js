import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct, loadProduct } from "../../store/products";
import './ProductItem.css'

const ProductSize = () => {
  const {productId} = useParams();
  const dispatch = useDispatch();
  const product = useSelector(loadProduct(productId));

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [dispatch, productId]);

  const sizes = product.size.split(' ');

  if (!product) return null;
  
  return (
    <div className="product_size_wrapper">
      {/* <h3>{`size in stock`}</h3> */}
      <h3>Size</h3>
      <div className="size_wrapper grid">
        {sizes.map(size => (
          <span className="size flex-row justify-center">{size} US</span>
        ))}
      </div>
    </div>
  )
}

export default ProductSize;