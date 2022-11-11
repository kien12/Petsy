import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root'
import {fetchReview, fetchAllReviews, modifyReview, deleteReview} from './actions/review_action'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  
  let store;
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
  window.store = store;
  window.deleteReview = deleteReview; 


  ReactDOM.render(< Root store={store}/>, root)
  
})



