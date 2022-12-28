import { connect }from 'react-redux';
import { fetchAllCategories } from '../../actions/category_actions';
import { fetchAllProducts } from '../../actions/product_actions'
import HeroBanner from './hero_banner';

const mSTP = state => {
  return {
    categories: Object.values(state.entities.categories),
    products: Object.values(state.entities.products)
  }
}

const mDTP = dispatch => {
  return {
    fetchAllCategories: () => dispatch(fetchAllCategories()),
    fetchAllProducts: () => dispatch(fetchAllProducts()),
  }
};

export default connect(mSTP, mDTP)(HeroBanner);
