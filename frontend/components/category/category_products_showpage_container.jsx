import { connect } from 'react-redux';
import { fetchCategoryProducts } from '../../actions/category_actions';
import CategoryProductShowPage from './category_products_showpage';

const mSTP = state => ({
  categoryProducts: Object.values(state.entities.categoryProducts)
})

const mDTP = dispatch => {
  return {
    fetchCategoryProducts: (categoryId) => dispatch(fetchCategoryProducts(categoryId))
  }
}

export default connect(mSTP, mDTP)(CategoryProductShowPage);