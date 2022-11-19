import { connect } from 'react-redux';
import {
  createReview,
  modifyReview,
  deleteReview
} from '../../actions/review_action';
import ReviewForm from './review_form';

const mSTP = (state, ownProps) => {
  console.log('review form container state', state)
  return {
    currentUserId: state.sessions.currentUserId,
    productId: Object.values(state.entities.products)[0].id,
    errors: Object.values(state.errors.reviewErrors)
  }
}

  const mDTP = dispatch => ({
    modifyReview: (review) => dispatch(modifyReview(review)),
    createReview: (review) => dispatch(createReview(review))
  });

  export default connect(mSTP, mDTP)(ReviewForm)