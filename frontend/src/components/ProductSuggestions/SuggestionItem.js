import { Link } from "react-router-dom";

const SuggestionItem = ({product}) => {
  const {id} = product;
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