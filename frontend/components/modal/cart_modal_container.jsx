import { connect } from 'react-redux';
import CartModal from './cart_modal';
import { closeModal } from '../../actions/modal_actions';


const mSTP = (state, ownProps) => {
  console.log('cart modal container state', state)
  return (
    null
  )
}

const mDTP = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mSTP, mDTP)(CartModal);
