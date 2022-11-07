import { connect } from 'react-redux';
import {
  modifyReview,
  deleteReview
} from '../../actions/review_action';
import ReviewForm from './review_form';

const mSTP = (state, ownProps) => {
  return {
    reviews: Object.values(state.entities.reviews),
    currentUser: state.sessions.id
  }
}

  const mDTP = dispatch => ({
    modifyReview: (review) => dispatch(modifyReview(review)),
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId))
  });

  export default connect(mSTP, mDTP)(ReviewForm)