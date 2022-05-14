import { connect } from 'react-redux';
import { fetchCategoryProducts } from '../../actions/category_actions';
import CategoryShowPage from './category_showpage';

const mSTP = state => ({
  categoryProducts: Object.values(state.entities.category)
})

const mDTP = dispatch => {
  return {
    fetchCategoryProducts: (categoryId) => dispatch(fetchCategoryProducts(categoryId))
  }
}

export default connect(mSTP, mDTP)(CategoryShowPage);