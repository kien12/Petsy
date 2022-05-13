import { combineReducers } from 'redux';

import CategoriesReducer from './categories_reducer';

const entitiesReducer = combineReducers({
  categories: CategoriesReducer
})

export default entitiesReducer;