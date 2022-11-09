import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root'
import {fetchReview, fetchAllReviews, modifyReview} from './actions/review_action'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  
  let store;
  // console.log('window current user111111', window.currentUser)
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      sessions: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  // console.log('window current user222222', window.currentUser)
  window.store = store;
  window.modifyReview = modifyReview; 


  ReactDOM.render(< Root store={store}/>, root)
  
})



