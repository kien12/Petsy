import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import { signup } from '../../actions/user_action'
import React from 'react';
import SignupForm from './signup_form';


const mSTP = ({ errors }) => ({
  formType: 'signup',
  errors: errors.session
});


const mDTP = dispatch => ({
  signup: user => dispatch(signup(user)),
  otherForm: (state) => dispatch(openModal(state)),
  closeModal: () => dispatch(closeModal()),
})

export default connect(mSTP, mDTP)(SignupForm)