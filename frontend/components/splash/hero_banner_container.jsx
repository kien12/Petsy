import { connect }from 'react-redux';
import { fetchAllCategories } from '../../actions/category_actions';
import HeroBanner from './hero_banner';

const mSTP = state => {
  return {
    categories: Object.values(state.entities.categories)
  }
}

const mDTP = dispatch => {
  return {
    fetchAllCategories: () => dispatch(fetchAllCategories())
    
  }
};

export default connect(mSTP, mDTP)(HeroBanner);
