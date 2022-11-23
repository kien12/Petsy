import { connect } from 'react-redux';
import ReviewCard from './review_card';
import { fetchReview, deleteReview } from '../../actions/review_action';

const mDTP = dispatch => {
  return {
    fetchReview: reviewId => dispatch(fetchReview(reviewId)),
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId))
  }
}

const mSTP = (state, ownProps) => {
  return {
    currentUserId: state.sessions.currentUserId,
    toggleCreateForm: ownProps.toggleCreateForm
  }
}

export default connect(mSTP, mDTP)(ReviewCard);

