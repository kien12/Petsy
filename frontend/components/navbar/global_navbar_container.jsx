import GlobalNavBar from "./global_navbar";
import { connect } from 'react-redux';
import { signup, login, logout } from '../../actions/user_action';
import { openModal, closeModal } from '../../actions/modal_actions'

const mSTP = state => {
  return {
    currentUserId: state.sessions.currentUserId
  }
}

const mDTP = dispatch => {
  return {
    login: (user) => dispatch(login(user)),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    logout: () => dispatch(logout())
  }
}

export default connect(mSTP, mDTP)(GlobalNavBar);