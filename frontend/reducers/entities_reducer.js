import { combineReducers } from 'redux';
import CategoryProductsReducer from './category_product_reducer'
import CategoriesReducer from './categories_reducer';

const entitiesReducer = combineReducers({
  categories: CategoriesReducer,
  categoryProducts: CategoryProductsReducer
})

export default entitiesReducer;