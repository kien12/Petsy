import { combineReducers } from 'redux';
import CategoryProductsReducer from './category_product_reducer'
import CategoriesReducer from './categories_reducer';
import ProductsReducer from './products_reducer';
import UsersReducer from './users_reducer';
import ReviewsReducer from './reviews_reducer';
import CartItemsReducer from './cart_items_reducer';

const entitiesReducer = combineReducers({
  categories: CategoriesReducer,
  categoryProducts: CategoryProductsReducer,
  products: ProductsReducer,
  reviews: ReviewsReducer,
  users: UsersReducer,
  cartItems: CartItemsReducer,
})

export default entitiesReducer;