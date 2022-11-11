import { connect } from 'react-redux';
import { modifyReview } from '../../actions/review_action';
import ReviewEditForm from './review_edit_form';



const mDTP = (dispatch) => {
  return {
    editReview: (review) => dispatch(modifyReview(review))
  }
}

export default connect(null, mDTP)(ReviewEditForm);