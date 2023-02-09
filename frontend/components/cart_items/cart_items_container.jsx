import { connect } from 'react-redux';
import CartItems from './cart_items';

const mSTP = state => ({
  cartItems: Object.values(state.entities.cartItems)
})

const mDTP = dispatch => ({
  
})

export default connect(mSTP, null)(CartItems)