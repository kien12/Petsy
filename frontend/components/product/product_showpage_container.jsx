import { connect } from 'react-redux';
import { fetchProduct } from '../../actions/product_actions'
import ProductShowpage from './product_showpage';

const mSTP = state => ({
  products: Object.values(state.entities.products)
});

const mDTP = dispatch => ({
  fetchProduct: (productId) => dispatch(fetchProduct(productId))
});

export default connect(mSTP, mDTP)(ProductShowpage)