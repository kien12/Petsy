import * as ReviewApiUtil from '../util/review_utils';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS'
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

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

export const addReview = (data) => dispatch => {
  return ReviewApiUtil.createReview(data)
    .then(
      review => dispatch(receiveReview(review)),
      errors => dispatch(receiveErrors(errors.responseJSON))
    )
}

export const deleteReview = reviewId => dispatch => {
  return ReviewApiUtil.modifyReview(reviewId)
    .then(review => dispatch(removeReview(review)))
}

// needs to be updated
// export const modifyReview = (reviewId, data) => dispatch => {
//   return ReviewApiUtil.getAllReviews(data) (
//     review => dispatch(modifyReview(reviewId)),
//     errors => dispatch(receiveErrors(errors.responseJSON))
//   )
// }

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