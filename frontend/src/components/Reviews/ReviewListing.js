import { useDispatch, useSelector } from "react-redux";
import { deleteReview } from "../../store/reviews";

const ReviewListing = ({review}) => {
  const dispatch = useDispatch();
  const {id, userId, name, rating, title, body} = review;
  const user = useSelector(state => state.session.user);
  const body_content = body.split('.');
  let updateBtn, deleteBtn;

  if (user.id === userId) {
    updateBtn = <button className="update_review">Update Review</button>
    deleteBtn = <button 
      className="update_review"
      onClick={() => dispatch(deleteReview(id))}>Delete Review</button>
  }


  const star = () => {
    const stars = [];

    for (let i = 1; i <= rating; i++) {
      stars.push(<i class="fa-solid fa-star"></i>)
    }

    return stars;
  }

  return (
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
  )
}

export default ReviewListing;