import { useEffect } from "react";
import { Link } from "react-router-dom";
import './Suggestion.css';

const SuggestionItem = ({product}) => {
  const {id, name, price} = product;
  const images =  product.imgUrls;
  const image = images[0];

  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }, []);

  return (
    <Link to={`/products/${id}`}
      onClick={() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
      }}>
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