import { connect } from 'react-redux';
import CartModal from './cart_modal';
import { closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';
import { fetchAllCartItems } from '../../actions/cart_items_actions'


const mSTP = (state, ownProps) => {
  // console.log('cart modal container state', state)
  return {
    cartItems: Object.values(state.entities.cartItems)
  }
}

const mDTP = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    fetchAllCartItems: () => dispatch(fetchAllCartItems())
  }
}

export default withRouter(connect(mSTP, mDTP)(CartModal));
