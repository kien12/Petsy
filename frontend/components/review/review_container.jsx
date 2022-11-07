import { connect } from 'react-redux';
import { 
  fetchReview,
  fetchAllReviews,
  modifyReview
} from '../../actions/review_action';
import Review from './review'

const mSTP = (state, ownProps) => {
  console.log('reviews state', state)
  // console.log('reviews ownProps', ownProps)
  return {
    // reviews: state.entities.reviews
    // reviews: ownProps.reviews
    reviews: Object.values(state.entities.reviews),
    currentUser: state.sessions.id
  }
};

const mDTP = dispatch => ({
  fetchReview: (reviewId) => dispatch(fetchReview(reviewId)),
  fetchReviews: () => dispatch(fetchAllReviews()),
});

export default connect(mSTP, mDTP)(Review)