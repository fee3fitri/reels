import { Link } from "react-router-dom";
import './ProductListing.css'

const ProductListing = ({product}) => {
  const {id, name, price} = product

  return (
    <div className="product_listing_wrapper flex-row align-end">
      <Link to={`/products/${id}`}>
        <img src="" alt={`${name}`} />
        <div className="product_listing_detail flex-row justify-between">
          <h2>{name}</h2>
          <p>{`$${price}`}</p>
        </div>
      </Link>
    </div>
  )
}

export default ProductListing;