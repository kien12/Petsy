import { connect } from 'react-redux';
import { 
  fetchReview,
  fetchAllReviews,
  modifyReview,
  addReview
} from '../../actions/review_action';
import ReviewList from './review_list'

 const mSTP = (state, ownProps) => {
  return {
    reviews: Object.values(state.entities.reviews),
    currentUser: state.sessions.id,
    toggleCreateForm: ownProps.toggleCreateForm
  }
};

const mDTP = dispatch => ({
  fetchReview: (reviewId) => dispatch(fetchReview(reviewId)),
  fetchReviews: () => dispatch(fetchAllReviews()),
  modifyReview: (review) => dispatch(modifyReview(review)),
  deleteReview: (reviewId) => dispatch(deleteReview(reviewId))
});

export default connect(mSTP, mDTP)(ReviewList)