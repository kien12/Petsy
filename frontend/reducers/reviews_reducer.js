import { 
  RECEIVE_REVIEW,
  RECEIVE_ALL_REVIEWS,
  REMOVE_REVIEW
 } from "../actions/review_action";

const ReviewsReducer = ( state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_REVIEW:
      return Object.assign({}, state, {[action.review.id]: action.review})
    case RECEIVE_ALL_REVIEWS:
      return Object.assign({}, action.reviews)
    case REMOVE_REVIEW:
      const newState = Object.assign({}, state, {[action.review.id]: action.review})
      delete newState[action.reviewId]
      return newState
    default:
      return state;
  }
}

export default ReviewsReducer;