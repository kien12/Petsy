import * as CategoryApiUtil from '../util/category_utils';

export const RECEIVE_ALL_CATEGORIES = 'RECEIVE_ALL_CATEGORIES'
export const RECEIVE_CATEGORY_PRODUCTS = 'RECEIVE_CATEGORY_PRODUCTS'
//ACTIONS
const receiveAllCategories = (categories) => {
  return {
    type: RECEIVE_ALL_CATEGORIES,
    categories
  }
}
const receiveCategoryProducts = (categoryProducts) => {
  return {
    type: RECEIVE_CATEGORY_PRODUCTS,
    categoryProducts
  }
}
//THUNK ACTIONS
export const fetchAllCategories = () => dispatch => {
  return CategoryApiUtil.fetchAllCategories()
    .then(categoryProducts => dispatch(receiveAllCategories(categoryProducts)))
}

export const fetchCategoryProducts = (categoryId) => dispatch => {
  return CategoryApiUtil.fetchCategoryProducts(categoryId)
    .then(categoryProducts => dispatch(receiveCategoryProducts(categoryProducts)))
}


