import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root'
import {fetchProduct, fetchAllProducts} from './actions/product_actions'
document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  let store = configureStore();  
  window.store = store
  window.fetchProduct = fetchProduct;
  window.fetchAllProducts = fetchAllProducts; 

  ReactDOM.render(< Root store={store}/>, root)
  
})



