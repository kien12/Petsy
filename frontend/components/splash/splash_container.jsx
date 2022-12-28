import { connect } from 'react-redux';
import Splash from './splash'
import { fetchAllProducts } from '../../actions/product_actions'

const mDTP = dispatch => ({
  fetchAllProducts: () => dispatch(fetchAllProducts()),
})

const mSTP = (state, ownProps) => ({
  // categories: Object.values(state.entities.products),
  products: Object.values(state.entities.products)
})

export default connect(mSTP, mDTP)(Splash)