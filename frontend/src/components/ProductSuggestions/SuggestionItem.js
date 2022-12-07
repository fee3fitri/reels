import { Link } from "react-router-dom";
import './Suggestion.css';

const SuggestionItem = ({product}) => {
  const {id, name, price} = product;
  const images =  product.imgUrls;
  const image = images[0];

  return (
    <Link to={`/products/${id}`}>
      <picture>
        <img src={image} alt={`${name}`} />
      </picture>
      <div className="suggestion_detail flex-row justify-between">
        <h2>{name}</h2>
        <p>{`$${price}`}</p>
      </div>
    </Link>
  )
}

export default SuggestionItem;