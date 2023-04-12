import { connect } from 'react-redux';
import { fetchProduct } from '../../actions/product_actions';
import { createCartItem } from '../../actions/cart_items_actions';
import ProductShowpage from './product_showpage';
import { openModal } from '../../actions/modal_actions'

const mSTP = (state, ownProps) => {
  return { 
    product: state.entities.products[ownProps.match.params.id],
    products: Object.values(state.entities.products),
    currentUserId: state.sessions.currentUserId
 }
};

const mDTP = dispatch => ({
  fetchProduct: (productId) => dispatch(fetchProduct(productId)),
  addCartItem: (cartItem) => dispatch(createCartItem(cartItem)),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mSTP, mDTP)(ProductShowpage)