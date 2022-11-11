import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "../../context/Modal";
import { deleteReview, updateReview } from "../../store/reviews";
import ReviewModal from "./ReviewModal";

const ReviewListing = ({review}) => {
  const dispatch = useDispatch();
  const {id, userId, name, rating, title, body} = review;
  const user = useSelector(state => state.session.user);
  const body_content = body.split('.');
  let updateBtn, deleteBtn;
  
  useEffect(() => {
    dispatch(updateReview({...review, title, body, rating}))
  }, [title, body, rating]);

  const [showModal, setShowModal] = useState(false);

  if (user.id === userId) {
    updateBtn = <button 
      className="update_review"
      onClick={() => {
        dispatch(updateReview(review));
        setShowModal(true);
      }}>
      Update Review
    </button>
    deleteBtn = <button 
      className="update_review"
      onClick={() => dispatch(deleteReview(id))}>
      Delete Review
    </button>
  }

  const star = () => {
    const stars = [];
    for (let i = 1; i <= rating; i++) {
      stars.push(<i class="fa-solid fa-star"></i>)
    }
    return stars;
  }

  return (
    <>
      <div className="review_listing_wrapper grid">
        <div className="review_author">
          <p>{name}</p>
          <p className="verified">Verified buyer</p>
        </div>
        <div className="review_content">
          <div className="review_header flex-row justify-between ">
            <div className="review_rating">
              {star()}
              <h2>{title}</h2>
            </div>
            <div className="update_review_wrapper">
              {updateBtn}
              {deleteBtn}
            </div>
            
          </div>
          <div className="review_body">
            {body_content.map(para => <p>{para}</p>)}
          </div>
        </div>
      </div>

      {showModal && (
        <div className="review_modal_wrapper">
          <Modal onClose={() => setShowModal(false)}>
            <ReviewModal/>
          </Modal>
        </div>
      )}
    </>
    
  )
}

export default ReviewListing;