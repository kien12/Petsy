import { connect } from 'react-redux';
import {
  addReview,
  modifyReview,
  deleteReview
} from '../../actions/review_action';
import ReviewForm from './review_form';

const mSTP = (state, ownProps) => {
  return {
    currentUser: state.sessions.CurrentUserId
  }
}

  const mDTP = dispatch => ({
    modifyReview: (review) => dispatch(modifyReview(review)),
    createReview: (review) => dispatch(addReview(review))
  });

  export default connect(mSTP, mDTP)(ReviewForm)