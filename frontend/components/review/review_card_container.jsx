import { connect } from 'react-redux';
import ReviewCard from './review_card';
import { fetchReview } from '../../actions/review_action';

const mDTP = dispatch => {
  return {
    fetchReview: reviewId => dispatch(fetchReview(reviewId)),
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId))
  }
}

const mSTP = state => {
  return {
    currentUserId: state.sessions.currentUserId
  }
}

export default connect(mSTP, mDTP)(ReviewCard);

