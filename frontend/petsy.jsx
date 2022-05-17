import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root'
// import {fetchProduct} from './actions/product_actions'
document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  let store = configureStore();  
  window.store = store
  // window.fetchProduct = fetchProduct; 

  ReactDOM.render(< Root store={store}/>, root)
  
})



