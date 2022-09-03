import { RECEIVE_ERRORS, RECEIVE_ALL_REVIEWS } from "../actions/review_action";

const ReviewsErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    case RECEIVE_ALL_REVIEWS:
      return Object.assign({}, action.reviews)
    default:
      return state;
  }
};

export default ReviewsErrorsReducer;