import { connect } from 'react-redux';;
import { fetchReview } from '../../actions/review_action';
import ReviewShowPage from './review_showpage'

const mSTP = (state, ownProps) => {
  return {
    review: state.entities.reviews[ownProps.match.params.id],
    reviews: Object.values(state.entities.reviews)
  }
};

const mDTP = dispatch => ({
  fetchReview: (reviewId) => dispatch(fetchReview(reviewId))
});

export default connect(mSTP, mDTP)(ReviewShowpage)