import { connect } from 'react-redux';
import LoginForm from './login_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mSTP = state => {
  return {
    formType: 'login',
    errors: state.errors.userErrors
  }
}

const mDTP = dispatch => {
  return {
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mSTP, mDTP)(LoginForm);


