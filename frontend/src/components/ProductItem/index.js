import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct, loadProduct } from "../../store/products";
import ProductColor from "./ProductColor";
import ProductImages from "./ProductImages";
import ProductSize from "./ProductSize";
import './ProductItem.css'

const ProductItem = () => {
  const {productId} = useParams();
  const dispatch = useDispatch();
  const product = useSelector(loadProduct(productId));

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [dispatch, productId]);

  if (!product) return null;

  return (
    <div className="page_wrapper grid">
      <div className="product_img_wrapper">
        <ProductImages />
      </div>
      <div className="product_details_wrapper">
        <h1>{product.name}</h1>
        <h2>{product.price}</h2>
        <p>{product.product_preview}</p>
        <ProductColor />
        <ProductSize />
        <button>Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductItem;