import { connect } from 'react-redux';
import ShoppingCart from './shopping_cart';
import { fetchAllCartItems, deleteCartItem } from '../../actions/cart_items_actions'

const mSTP = state => ({
  cartItems: Object.values(state.entities.cartItems)
})

const mDTP = dispatch => ({
  fetchAllCartItems: () => dispatch(fetchAllCartItems()),
  deleteCartItem: (id) => dispatch(deleteCartItem(id))
})

export default connect(mSTP, mDTP)(ShoppingCart);