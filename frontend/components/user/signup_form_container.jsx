import { connect } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';
import { signup } from '../../actions/user_action'
import React from 'react';
import SignupForm from './signup_form';


const mSTP = ({ errors }) => ({
  formType: 'signup',
  errors: errors.session
});


const mDTP = dispatch => ({
  processForm: user => dispatch(signup(user)),
  otherForm: (
    <button onClick={() => dispatch(openModal('login'))}>
      Login
    </button>
  ),
  closeModal: () => dispatch(closeModal()),
})

export default connect(mSTP, mDTP)(SignupForm)