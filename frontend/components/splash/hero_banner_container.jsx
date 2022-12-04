import { connect }from 'react-redux'
import { fetchAllCategories } from '../../util/category_utils'

const mSTP = state => {
  console.log('banner container state', state)
  return {
    categories: Object.values(state.entities.categories)
  }
}

const mDTP =  dispatch => {
  return {
    fetchAllCategories: () => dispatch(fetchAllCategories())
  }
}

export default connect(mSTP, mDTP)(HeroBanner)
