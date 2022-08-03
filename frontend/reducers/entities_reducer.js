import { combineReducers } from 'redux';
import CategoryProductsReducer from './category_product_reducer'
import CategoriesReducer from './categories_reducer';
import ProductsReducer from './products_reducer';
import UsersReducer from './users_reducer';


const entitiesReducer = combineReducers({
  categories: CategoriesReducer,
  categoryProducts: CategoryProductsReducer,
  products: ProductsReducer,
  users: UsersReducer
})

export default entitiesReducer;