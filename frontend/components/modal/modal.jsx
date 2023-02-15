import React from 'react';
import LoginFormContainer from '../user/login_form_container';
import SignupFormContainer from '../user/signup_form_container';
import CartModalContainer from '../modal/cart_modal_container';

const Modal = ({modal, closeModal}) => {
  if (!modal) {
    return null;
  }
  let component;
  switch(modal) {
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'signup':
      component = <SignupFormContainer/>;
      break;
    case 'cart':
      component = <CartModalContainer/>;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
        {component}
    </div>
  );
}

export default Modal;