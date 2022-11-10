import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory, loadProducts } from "../../store/products";
import ProductListing from "../ProductListing/";
import './Collections.css'

const WomenCollections = () => {
  const dispatch = useDispatch();
  const products = useSelector(loadProducts);

  useEffect(() => {
    dispatch(fetchCategory('womens'));
  }, [dispatch]);

  if (!products) return null;

  return (
    <div className="page_wrapper flex-col align-center">
      <div className="collections_header flex-col align-center">
        <p>WOMEN</p>
        <h1>
          Every style, for any day
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

export default WomenCollections;