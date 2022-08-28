import GlobalNavBar from "./global_navbar";
import { connect } from 'react-redux';
import { signup, login } from '../../actions/user_action';
import { openModal, closeModal } from '../../actions/modal_actions'

const mSTP = state => {
  return {
    currentUser: state.sessions.currentUserId
  }
}

const mDTP = dispatch => {
  return {
    login: (user) => dispatch(login(user)),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mSTP, mDTP)(GlobalNavBar);