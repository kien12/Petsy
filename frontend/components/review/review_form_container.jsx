import { connect } from 'react-redux';
import {
  addReview,
  modifyReview,
  deleteReview
} from '../../actions/review_action';
import ReviewForm from './review_form';

const mSTP = (state, ownProps) => {
  console.log('review form container props', ownProps)
  return {
    // reviews: Object.values(state.entities.reviews),
    currentUser: state.sessions.id,
    // product: ownProps.product
  }
}

  const mDTP = dispatch => ({
    modifyReview: (review) => dispatch(modifyReview(review)),
    // deleteReview: (reviewId) => dispatch(deleteReview(reviewId))
    createReview: (review) => dispatch(addReview(review))
  });

  export default connect(mSTP, mDTP)(ReviewForm)