import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root'
import {createReview} from './actions/review_action'
// import { fetchAllProducts } from './actions/product_actions'
import { createCartItem } from './util/cart_items_utils';
import { fetchProduct } from './util/product_utils'
import { login } from './util/user_util';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      sessions: { currentUserId: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.store = store;
  window.createCartItem = createCartItem;
  window.fetchProduct = fetchProduct;
  window.login = login;

  ReactDOM.render(< Root store={store}/>, root)
  
})



