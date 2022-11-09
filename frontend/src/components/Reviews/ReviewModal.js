import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createReview, getReview, updateReview } from "../../store/reviews";

const ReviewModal = () => {
  const dispatch = useDispatch();
  const {productId} = useParams();
  const user = useSelector(state => state.session.user);
  let review = useSelector(getReview(productId));
  const formType = review ? 'Update Review' : 'Create Review';

  if (formType === 'Create Review') {
    review = {
      rating: '',
      title: '',
      body: ''
    }
  }

  const [rating, setRating] = useState(review.rating);
  const [title, setTitle] = useState(review.title);
  const [body, setBody] = useState(review.body);
  const [hover, setHover] = useState(null);
  const [hideReview, setHideReview] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    review = {
      ...review,
      userId: user.id,
      productId: productId,
      rating: rating,
      title: title,
      body: body
    };

    formType === 'Create Review' ?
      dispatch(createReview(review)) :
      dispatch(updateReview(review));
  }

  const stars = () => {
    return [...Array(5)].map((star, idx) => {
      const rating = idx + 1;

      return(
        <div
          key={rating}
          value={rating}
          className={rating <= (rating || hover) ? "starOn" : "starOff"}
          onClick={() => setRating(rating)}
          onMouseEnter={() => setHover(rating)}
          onMouseOut={() => setHover(rating)}
        >
          <i className="fa-solid fa-star"></i>
        </div>
      )
    })
  }

  return (
    <div className={`review_modal ${hideReview ? 'hide-modal' : ''}`}>
      <form onSubmit={handleSubmit}>
        <h1>{formType}</h1>
        <h2></h2>
        <label>
          Overall rating
          <div className="star-buttons">
            {stars()}
          </div>
        </label>
        <label>
          Title
          <input 
            type="text" 
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </label>
        <label>
          Review
          <textarea
            value={body}
            rows="4"
            cols="20"
            onChange={e => setBody(e.target.value)}
          />
        </label>
        <input type="submit" value={formType} />
      </form>
    </div>
    
  )
}

export default ReviewModal;