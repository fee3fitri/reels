import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { createReview, getReview, updateReview } from "../../store/reviews";
import "./Review.css"

const ReviewModal = ({setShowModal, formType, existingReview}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {productId} = useParams();
  const user = useSelector(state => state.session.user);
  let review = useSelector(getReview(productId));
  // (review?.userId === user?.id) ? setFormType('Update Review') : setFormType('Create Review');
  
  console.log(formType);

  if (formType === 'Create Review') {
    review = {
      rating: '',
      title: '',
      body: ''
    }
  }

  if (formType === 'Update Review') {
    existingReview = {
      rating: existingReview?.rating,
      title: existingReview?.title,
      body: existingReview?.body
    }
  }

  const [rating, setRating] = useState(existingReview?.rating);
  const [title, setTitle] = useState(existingReview?.title);
  const [body, setBody] = useState(existingReview?.body);
  const [hideReview] = useState(false);

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
      dispatch(updateReview(existingReview));

    history.push(`/products/${productId}`);
    setShowModal(false);
  }

  return (
    <div className={`review_modal ${hideReview ? 'hide-modal' : ''}`}>
      <form 
        onSubmit={handleSubmit}
        className="flex-col">
        <h1 className="text-center">{formType}</h1>
        <label>
          Overall rating
          <div class="rating">
            <input type="radio" id="star2" name="rating" value={Number("5")} onChange={e => setRating(e.target.value)} />
            <label class="star" for="star2" aria-hidden="true"></label>
            <input type="radio" id="star3" name="rating" value={Number("4")} onChange={e => setRating(e.target.value)} />
            <label class="star" for="star3" aria-hidden="true"></label>
            <input type="radio" id="star4" name="rating" value={Number("3")} onChange={e => setRating(e.target.value)} />
            <label class="star" for="star4" aria-hidden="true"></label>
            <input type="radio" id="star5" name="rating" value={Number("2")} onChange={e => setRating(e.target.value)} />
            <label class="star" for="star5" aria-hidden="true"></label>
            <input type="radio" id="star1" name="rating" value={Number("1")} onChange={e => setRating(e.target.value)} />
            <label class="star" for="star1" aria-hidden="true"></label>
          </div>
        </label>
        <label>
          Title
          <input 
            type="text" 
            value={title}
            placeholder='Write the review title'
            onChange={e => setTitle(e.target.value)}
          />
        </label>
        <label>
          Review
          <textarea
            rows="4"
            cols="20"
            value={body}
            placeholder='Write your review here...'
            onChange={e => setBody(e.target.value)}
          />
        </label>
        <div className="flex-row">
          <input 
            type="submit" 
            value={formType}
          />
          <button className="btn"
            onClick={() => setShowModal(false)}>
            Cancel Review
          </button>
        </div>
      </form>
    </div>
    
  )
}

export default ReviewModal;