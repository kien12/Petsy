import { connect } from 'react-redux';
import ReviewCard from './review_card';
import { fetchReview } from '../../actions/review_action';

const mDTP = dispatch => {
  return {
    fetchReview: reviewId => dispatch(fetchReview(reviewId))
  }
}

export default connect(null, mDTP)(ReviewCard);

