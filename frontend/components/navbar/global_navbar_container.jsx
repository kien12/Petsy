import GlobalNavBar from "./global_navbar";
import { connect } from 'react-redux';
import { signup, login, logout } from '../../actions/user_action';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchAllCartItems } from "../../actions/cart_items_actions";

const mSTP = state => {
  return {
    currentUserId: state.sessions.currentUserId,
    currentUser: Object.values(state.entities.users)
  }
}

const mDTP = dispatch => {
  return {
    login: (user) => dispatch(login(user)),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    logout: () => dispatch(logout()),
    fetchAllCartItems: () => dispatch(fetchAllCartItems())

  }
}

export default connect(mSTP, mDTP)(GlobalNavBar);