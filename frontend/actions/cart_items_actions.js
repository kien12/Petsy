import { 
  getAllCartItems, 
  createCartItem, 
  updateCartItem, 
  deleteCartItem } from "../util/cart_items_utils";

  export const RECEIVE_ALL_CART_ITEMS = 'RECEIVE_ALL_CART_ITEMS';
  export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';

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

  


