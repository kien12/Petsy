import { connect } from 'react-redux';
import {
  createReview,
  modifyReview,
  deleteReview
} from '../../actions/review_action';
import ReviewForm from './review_form';
import { openModal, closeModal} from '../../actions/modal_actions'

const mSTP = (state, ownProps) => {
  return {
    currentUserId: state.sessions.currentUserId,
    productId: Object.values(state.entities.products)[0].id,
    errors: Object.values(state.errors.reviewErrors)
  }
}

  const mDTP = dispatch => ({
    modifyReview: (review) => dispatch(modifyReview(review)),
    createReview: (review) => dispatch(createReview(review)),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())

  });

  export default connect(mSTP, mDTP)(ReviewForm)