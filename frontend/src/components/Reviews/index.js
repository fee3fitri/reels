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
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(fetchReviews(productId));
  }, [productId]);

  if (!reviews) return null;

  return (
    <>
      <div className="review_wrapper flex-col align-center">
        <h2>Reviews</h2>
        <div className="review_items flex-row align-center justify-between">
          <div className="flex-col">
            <div className="review_index flex-row align-center">
              <h3>4.3</h3>
              <div className="review_stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
            <p>Based on {} reviews</p>
          </div>
          
          <button 
            className="review_button"
            onClick={() => setShowModal(true)}>
            Write a review
          </button>
        </div>

        <div className="review_item_wrapper">
          {reviews.map(review => (
            <ReviewListing 
              key={review.id}
              review={getReviews}
            />
          ))}
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