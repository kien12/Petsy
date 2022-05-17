import { RECEIVE_PRODUCT } from "../actions/product_actions";

const ProductReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PRODUCT: 
      return Object.assign({}, {[action.product.id]: action.product})
    // case RECEIVE_ALL_PRODUCTS:
      // return Object.assign({}, action.product)
    default:
      return state;
  }
}
