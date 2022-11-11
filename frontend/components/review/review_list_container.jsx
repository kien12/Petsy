import { connect } from 'react-redux';
import { 
  fetchReview,
  fetchAllReviews,
  modifyReview,
  addReview
} from '../../actions/review_action';
import ReviewList from './review_list'

const mSTP = (state) => {
  // console.log('reviews state', state)
  console.log('reviews ownProps', ownProps)
  return {
    // reviews: state.entities.reviews
    // reviews: ownProps.reviews
    reviews: Object.values(state.entities.reviews),
    currentUser: state.sessions.id
  }
};

const mDTP = dispatch => ({
  // createReview: (review) => dispatch(createReview(review)),
  fetchReview: (reviewId) => dispatch(fetchReview(reviewId)),
  fetchReviews: () => dispatch(fetchAllReviews()),
  modifyReview: (review) => dispatch(modifyReview(review)),
  deleteReview: (reviewId) => dispatch(deleteReview(reviewId))
});

export default connect(mSTP, mDTP)(ReviewList)