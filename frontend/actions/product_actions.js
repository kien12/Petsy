import * as ProductApiUtil from '../util/product_utils'

export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
export const RECEIVE_ALL_PRODUCTS = 'RECEIVE_ALL_PRODUCTS';

const ReceiveProduct = (product) => {
  return {
    type: RECEIVE_PRODUCT,
    product
  }
}
const ReceiveAllProducts = (products) => {
  return {
    type: RECEIVE_ALL_PRODUCTS,
    products
  }
}

export const fetchProduct = (productId) => dispatch => {
  return ProductApiUtil.fetchProduct(productId)
    .then( product => dispatch(ReceiveProduct(product)))
}

export const fetchAllProducts = () => dispatch => {
  return ProductApiUtil.fetchAllProducts()
    .then( products => dispatch(ReceiveAllProducts(products)))
}


