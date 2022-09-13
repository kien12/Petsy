import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root'
import {fetchReview, fetchAllReviews, modifyReview} from './actions/review_action'
document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  let store = configureStore();  
  window.store = store
  window.modifyReview = modifyReview; 

  ReactDOM.render(< Root store={store}/>, root)
  
})



