import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct, loadProduct } from "../../store/products";
import './ProductItem.css'


const ProductImages = () => {
  const {productId} = useParams();
  const dispatch = useDispatch();
  const product = useSelector(loadProduct(productId));

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [dispatch, productId]);

  // const images = product.imageUrl.split(' ');
  const images = product.imgUrls;


  if (!product) return null;

  return (
    <>
      {images.map(image => (
        <picture className="image_wrapper">
          <img src={image} alt={product.name} key={image} />
        </picture>
      ))}
    </>
  )
}

export default ProductImages;