import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root'
import {fetchCategoryProducts} from '../frontend/actions/category_actions'
document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  let store = configureStore();  
  window.store = store
  window.fetchCategoryProducts = fetchCategoryProducts; 

  ReactDOM.render(< Root store={store}/>, root)
  
})



