import { connect } from 'react-redux';
import CartItem from './cart_item';
import { deleteCartItem } from '../../actions/cart_items_actions'

const mSTP = state => ({
  cartItems: Object.values(state.entities.cartItems)
})

const mDTP = dispatch => ({
  deleteCartItem: cartItemId => dispatch(deleteCartItem(cartItemId))
})

export default connect(mSTP, mDTP)(CartItem);