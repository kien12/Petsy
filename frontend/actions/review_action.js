import * as ReviewApiUtil from '../util/review_utils';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS'

const ReceiveReview = review => {
  return {
    type: RECEIVE_REVIEW,
    review
  }
}

const ReceiveAllReview = reviews => {
  return {
    type: RECEIVE_ALL_REVIEWS,
    reviews
  }
}

export const fetchReview = (reviewId) => dispatch => {
  return ReviewApiUtil.getReview(reviewId)
    .then( review => dispatch(ReceiveReview(review)))
} 

export const fetchAllReviews = () => dispatch => {
  return ReviewApiUtil.getAllReviews()
    .then( (reviews) => dispatch(ReceiveAllReview(reviews)))
} 