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
    </Link>
  )
}

export default SuggestionItem;