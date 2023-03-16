import { connect } from 'react-redux';
import CartItem from './cart_item';
import { deleteCartItem, updateCartItem } from '../../actions/cart_items_actions'

const mSTP = state => ({
  cartItems: Object.values(state.entities.cartItems)
})

const mDTP = dispatch => ({
  deleteCartItem: cartItemId => dispatch(deleteCartItem(cartItemId)),
  updateCartItem: cartItem => dispatch(deleteCartItem(cartItem))
})

export default connect(mSTP, mDTP)(CartItem);