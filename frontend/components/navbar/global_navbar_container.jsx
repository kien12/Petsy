import GlobalNavBar from "./global_navbar";
import { connect } from 'react-redux';
import { signup, login } from '../../actions/user_action';
import { openModal, closeModal } from '../../actions/modal_actions'

const mDTP = dispatch => {
  return {
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(null, mDTP)(GlobalNavBar);