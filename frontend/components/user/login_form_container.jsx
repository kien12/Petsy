import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login } from '../../actions/user_action';
import { openModal, closeModal } from '../../actions/modal_actions';
import React from 'react';

const mSTP = state => {
  return {
    formType: 'login',
    errors: state.errors.userErrors
  }
}

const mDTP = dispatch => {
  return {
    login: user => dispatch(login(user)),
    otherForm: (state) => dispatch(openModal(state)),
    closeModal: () => dispatch(closeModal()),
    openModal: (modal) => dispatch(openModal(modal))
  }
}

export default connect(mSTP, mDTP)(LoginForm);


