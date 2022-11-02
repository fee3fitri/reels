import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, loadProducts } from "../../store/products";
import ProductListing from "../ProductListing";

const WomenCollections = () => {
  const dispatch = useDispatch();
  const products = useSelector(loadProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (!products) {return null};

  return (
    <div className="collections_wrapper">
      <div className="collections_header">
        <p>WOMEN</p>
        <h1>
          Every style for any day
          <i className="fa-regular fa-circle"></i>
        </h1>
      </div>
      <div className="products_listings">
        {products.map(product => (
          // <ProductListing 
          //   key={product.id}
          //   product={product} 
          // />
          product.name
        ))}
      </div>
    </div>
  )  
}

export default WomenCollections;