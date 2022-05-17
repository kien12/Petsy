import * as ProductApiUtil from '../util/product_utils'

export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
export const RECEIVE_ALL_PRODUCTS = 'RECEIVE_ALL_PRODUCTS';

const ReceiveProduct = (product) => {
  return {
    type: RECEIVE_PRODUCT,
    product
  }
}

export const fetchProduct = (productId) => dispatch => {
  return ProductApiUtil.fetchProduct(productId)
    .then( product => dispatch(ReceiveProduct(product)))
} 


