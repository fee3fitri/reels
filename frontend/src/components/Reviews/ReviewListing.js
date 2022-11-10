import { Divider } from "@mui/material";
import { useSelector } from "react-redux";

const ReviewListing = ({review}) => {
  const {id, userId, name, rating, title, body} = review;
  const user = useSelector(state => state.session.user);
  const body_content = body.split('.');

  const star = () => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      stars.push(<i class="fa-solid fa-star"></i>)
    }

    return stars;
  }

  return (
    <div className="review_listing_wrapper grid">
      <div className="review_writer text-center">
        <p>{name}</p>
        <p className="verified">Verified buyer</p>
      </div>
      <div className="review_content">
        <div className="review_rating">
          {star()}
        </div>
        <h2>{title}</h2>
        <div className="review_body">
          {body_content.map(para => <p>{para}</p>)}
        </div>
      </div>
    </div>
  )
}

export default ReviewListing;