import { combineReducers } from 'redux';

import UsersErrorsReducer from './users_errors_reducer';
import ReviewsErrorsReducer from './reviews_errors_reducer';

const errorsReducer = combineReducers({
  userErrors: UsersErrorsReducer,
  reviewErrors: ReviewsErrorsReducer
});

export default errorsReducer;