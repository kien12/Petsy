import * as ReviewApiUtil from '../util/review_utils';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS'
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const REMOVE_REVIEW = "REMOVE_REVIEW";

const receiveReview = review => {
  return {
    type: RECEIVE_REVIEW,
    review
  }
}

const receiveAllReview = reviews => {
  return {
    type: RECEIVE_ALL_REVIEWS,
    reviews
  }
}

const receiveErrors = errors => {
  return {
    type: RECEIVE_ERRORS,
    errors
  }
}

const removeReview = reviewId => {
  return {
    type: REMOVE_REVIEW,
    reviewId
  }
}

export const addReview = (data) => dispatch => {
  return ReviewApiUtil.createReview(data)
    .then(
      review => dispatch(receiveReview(review)),
      errors => dispatch(receiveErrors(errors.responseJSON))
    )
}

export const deleteReview = reviewId => dispatch => {
  return ReviewApiUtil.deleteReview(reviewId)
    .then( () => dispatch(removeReview(reviewId))),
    errors => dispatch(receiveErrors(errors.responseJSON))
} 

export const modifyReview = (review) => dispatch => {
  return ReviewApiUtil.modifyReview(review)
    .then(
      review => dispatch(receiveReview(review)),
      errors => dispatch(receiveErrors(errors.responseJSON))
    )
}

export const fetchReview = (reviewId) => dispatch => {
  return ReviewApiUtil.getReview(reviewId)
    .then( 
      review => dispatch(receiveReview(review)),
      errors => dispatch(receiveErrors(errors.responseJSON))
    )
} 

export const fetchAllReviews = () => dispatch => {
  return ReviewApiUtil.getAllReviews()
    .then( 
      reviews => dispatch(receiveAllReview(reviews)),
      errors => dispatch(receiveErrors(errors.responseJSON))
      )
} 