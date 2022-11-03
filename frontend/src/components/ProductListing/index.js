import { Link } from "react-router-dom";
import './ProductListing.css'

const ProductListing = ({product}) => {
  const {id, name, price, imageUrl} = product
  const images = imageUrl.split(' ');
  const image = images[0];

  return (
    <div className="product_listing_wrapper flex-row align-end">
      <Link to={`/products/${id}`}>
        <picture>
          <img src={image} alt={`${name}`} />
        </picture>
        <div className="product_listing_detail flex-row justify-between">
          <h2>{name}</h2>
          <p>{`$${price}`}</p>
        </div>
      </Link>
    </div>
  )
}

export default ProductListing;