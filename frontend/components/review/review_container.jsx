import { connect } from 'react-redux';;
import { 
  fetchReview,
  fetchAllReviews
} from '../../actions/review_action';
import Review from './review'

const mSTP = (state) => {
  console.log('reviews state', state)
  return {
    // review: state.entities.reviews
    reviews: Object.values(state.entities.reviews)
  }
};

const mDTP = dispatch => ({
  fetchReview: (reviewId) => dispatch(fetchReview(reviewId)),
  fetchReviews: () => dispatch(fetchAllReviews())
});

export default connect(mSTP, mDTP)(Review)