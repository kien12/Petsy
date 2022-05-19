import { RECEIVE_PRODUCT, RECEIVE_ALL_PRODUCTS } from "../actions/product_actions";


const ProductsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PRODUCT: 
      return Object.assign({}, {[action.product.id]: action.product})
    case RECEIVE_ALL_PRODUCTS:
      return Object.assign({}, action.products)
    default:
      return state;
  }
}

export default ProductsReducer;