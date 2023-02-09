import { connect } from 'react-redux';
import CartItems from './cart_items';
import { createCartItem } from '../../actions/cart_items_actions'

const mSTP = state => ({
  cartItems: Object.values(state.entities.cartItems)
})

const mDTP = dispatch => ({
  createCartItem: cartItem => dispatch(createCartItem(cartItem))
})

export default connect(mSTP, mDTP)(CartItems);