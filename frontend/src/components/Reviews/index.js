import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchReviews, getReviews } from "../../store/reviews";
import { Modal } from "../../context/Modal";
import ReviewModal from "./ReviewModal";
import ReviewListing from "./ReviewListing";
import LoginFormModal from "../LoginFormModal";
import "./Review.css"

const Review = () => {
  const dispatch = useDispatch();
  const {productId} = useParams();
  const user = useSelector(state => state.session.user);
  const reviews = useSelector(getReviews);
  const ratings = reviews.map(review => review.rating);
  const [showModal, setShowModal] = useState(false);
  
  const reviewAvg = () => {
    if (reviews) {
      return (ratings.reduce((a, b) => a + b) / reviews.length).toFixed(1);
    } else {
      return 0.0;
    }
  }

  const reviewStars = () => {
    const roundedRating = Math.round(reviewAvg());
    const stars = [];

    for (let i = 0; i < roundedRating; i++) {
      stars.push(<i class="fa-solid fa-star"></i>)
    }

    return stars;
  }

  useEffect(() => {
    dispatch(fetchReviews(productId));
  }, [dispatch, productId]);

  if (reviews.length === 0) return null;

  return (
    <>
      <div className="review_wrapper flex-col align-center">
        <h1>Reviews</h1>
        <div className="review_items flex-row align-center justify-between">
          <div className="flex-col">
            <div className="review_index flex-row align-center">
              <h3>{reviewAvg()}</h3>
              <div className="review_stars">
                {reviewStars()}
              </div>
            </div>
            <p>Based on {reviews.length} reviews</p>
          </div>
          
          <button 
            className="review_button"
            onClick={() => setShowModal(true)}>
            Write a review
          </button>
        </div>

        <div className="review_item_wrapper">
          {reviews ? reviews.map(review => (
            <ReviewListing 
              key={review.id}
              review={review}/>
          )) : <div className="empty_reviews">There is no review for this product.</div>}
        </div>
      </div>

      {showModal && (
        <div className="review_modal_wrapper">
          <Modal onClose={() => setShowModal(false)}>
            {user ? <ReviewModal/> : (
              <div className="review_modal_login flex-col">
                <h1>Oops, you're not logged in</h1>
                <p>Login to write a review</p>
                <div className="review_login_button">
                  <LoginFormModal/>
                </div>
              </div>
            )}
          </Modal>
        </div>
      )}
    </>
  )
}

export default Review;