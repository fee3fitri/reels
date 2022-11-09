import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory, loadProducts } from "../../store/products";
import ProductListing from "../ProductListing/ProductListing";
import './Collections.css'

const MenCollections = () => {
  const dispatch = useDispatch();
  const products = useSelector(loadProducts);

  useEffect(() => {
    dispatch(fetchCategory('mens'));
  }, [dispatch]);

  if (!products) return null;

  return (
    <div className="page_wrapper flex-col align-center">
      <div className="collections_header flex-col align-center">
        <p>MEN</p>
        <h1>
          The future of comfort
          <i className="fa-regular fa-circle"></i>
        </h1>
      </div>
      <div className="products_listings grid">
        {products.map(product => (
          <ProductListing 
            key={product.id}
            product={product} 
          />
        ))}
      </div>
    </div>
  )  
}

export default MenCollections;