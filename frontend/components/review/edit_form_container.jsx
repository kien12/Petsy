import { connect } from 'react-redux';
import { modifyReview } from '../../actions/review_action';
import EditForm from './edit_form';

const mSTP = (state, ownProps) => {
  
}

const mDTP = (dispatch) => {
  return {
    editReview: (review) => dispatch(modifyReview(review))
  }
}

export default connect(null, mDTP)(EditForm);