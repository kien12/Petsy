import { RECEIVE_REVIEW, RECEIVE_ALL_REVIEWS } from "../actions/review_action";

const ReviewsReducer = ( state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_REVIEW:
      return Object.assign({}, {[action.review.id]: action.review})
    case RECEIVE_ALL_REVIEWS:
      return Object.assign({}, action.reviews)
    default:
      return state;
  }
}

export default ReviewsReducer;