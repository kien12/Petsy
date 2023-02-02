import * as CartItemApiUtil from "../util/cart_items_utils";
import { RECEIVE_ERRORS } from "./review_action";

  export const RECEIVE_ALL_CART_ITEMS = 'RECEIVE_ALL_CART_ITEMS';
  export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
  export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

  const receiveAllCartItems = (cartItems) => {
    return {
       type: RECEIVE_ALL_CART_ITEMS,
       cartItems
    }
  }

  const removeCartItem = (id) => {
    return {
      type: REMOVE_CART_ITEM,
      id
    }
  }

  const receiveErrors = errors => {
    return {
      type: RECEIVE_ERRORS,
      errorss
    }
  }

  export const createCartItem = (data) => dispatch => {
    return CartItemApiUtil.createCartItem(data)
    .then(
      cartItem => dispatch(receiveAllCartItems(cartItem))
    )
  }

  


