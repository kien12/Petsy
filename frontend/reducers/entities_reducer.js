import { combineReducers } from 'redux';
import CategoryProductsReducer from './category_product_reducer'
import CategoriesReducer from './categories_reducer';
import ProductsReducer from './products_reducer';

const entitiesReducer = combineReducers({
  categories: CategoriesReducer,
  categoryProducts: CategoryProductsReducer,
  products: ProductsReducer
})

export default entitiesReducer;