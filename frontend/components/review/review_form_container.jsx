import { connect } from 'react-redux';
import {
  addReview,
  modifyReview,
  deleteReview
} from '../../actions/review_action';
import ReviewForm from './review_form';

const mSTP = (state, ownProps) => {
  console.log('review form container state', state)
  return {
    currentUser: state.sessions.CurrentUserId,
    productId: state.entities.products.id
  }
}

  const mDTP = dispatch => ({
    modifyReview: (review) => dispatch(modifyReview(review)),
    createReview: (review) => dispatch(addReview(review))
  });

  export default connect(mSTP, mDTP)(ReviewForm)