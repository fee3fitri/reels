import csrfFetch from "./csrf";

const RECEIVE_REVIEWS = 'review/RECEIVE_REVIEWS';
const RECEIVE_REVIEW = 'review/RECEIVE_REVIEW';
const REMOVE_REVIEW = 'review/REMOVE_REVIEW';


// ACTION CREATORS
export const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
})

export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
})

export const removeReview = reviewId => ({
  type: REMOVE_REVIEW,
  reviewId
})


// SELECTORS
export const getReviews = state => {
  return state.reviews ? Object.values(state.reviews) : [];
}

// Might need to pass productId instead of reviewId???
export const getReview = productId => state => {
  return state.reviews ? state.reviews[productId] : null;
}


// THUNK
export const fetchReviews = productId => async dispatch => {
const res = await csrfFetch(`/api/products/${productId}/reviews`);
const reviews = await res.json();
dispatch(receiveReviews(reviews));
}

export const fetchReview = reviewId => async dispatch => {
  const res = await csrfFetch(`/api/reviews/${reviewId}`);
  const review = await res.json();
  dispatch(receiveReview(review));
}

export const createReview = currentReview => async dispatch => {
const res = await csrfFetch(`/api/reviews`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify({review: currentReview})
  });

  if (res.ok) {
    const newReview = await res.json();
    dispatch(receiveReview(newReview));
  }
}

export const updateReview = review => async dispatch => {
const res = await csrfFetch(`/api/reviews/${review.id}`, {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify(review)
});

if (res.ok) {
  const updatedReview = await res.json();
  dispatch(receiveReview(updatedReview));
  }
}

// Might need to pass review.id???
export const deleteReview = reviewId => async dispatch => {
  const res = await csrfFetch(`/api/reviews/${reviewId}`, {
    method: 'DELETE',
  });
  
  if (res.ok) {
    dispatch(removeReview(reviewId));
  }
}


// REDUCERS
const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type){
    case RECEIVE_REVIEWS:
      // Check here if there is something wrong
      return {...state, ...action.reviews};
    case RECEIVE_REVIEW:
      // Check here if there is something wrong
      const review = action.review;
      return {...state, [review.id]: review};
    case REMOVE_REVIEW:
      const nextState = {...state};
      delete nextState[action.reviewId];
      return nextState;
    default:
      return state;
  }
}

export default reviewsReducer;