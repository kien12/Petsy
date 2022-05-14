import { RECEIVE_CATEGORY_PRODUCTS } from "../actions/category_actions";

const CategoryProductsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CATEGORY_PRODUCTS:
      return Object.assign({}, action.categoryProducts)
    default:
      return state;
  }
}

export default CategoryProductsReducer;