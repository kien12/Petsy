import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root'
import {createReview} from './actions/review_action'
// import { createReview,getReview, modifyReview } from './util/review_utils'
import { fetchAllProducts } from './actions/product_actions'

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
  window.fetchAllProducts = fetchAllProducts;


  ReactDOM.render(< Root store={store}/>, root)
  
})



