import { RECEIVE_ALL_CART_ITEMS, REMOVE_CART_ITEM } from '../actions/cart_items_actions';

const CartItemsReducer = ( state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_CART_ITEMS:
      return Object.assign({}, action.cartItems)
    case REMOVE_CART_ITEM:
      let newState = Object.assign({}, state)
      delete newState[action.id]
      return newState;
    default:
      return state;
  }
}

export default CartItemsReducer;
