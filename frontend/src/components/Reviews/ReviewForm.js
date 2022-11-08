import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createReview, getReview } from "../../store/reviews";

const ReviewForm = () => {
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
  const [hideReview, setHideReview] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    review = {...review, rating, title, body};
    formType === 'Create Review' ?
      dispatch(createReview(review)) :
      dispatch(updateReview(review));
  }

  return (
    <div className={`review_modal ${hideReview ? 'hide-modal' : ''}`}>
      <form onSubmit={handleSubmit}>
        <h1>{formType}</h1>
      </form>
    </div>
    
  )
}

export default ReviewForm;