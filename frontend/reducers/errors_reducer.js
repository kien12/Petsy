import { combineReducers } from 'redux';

import UsersErrorsReducer from './users_errors_reducer';

const errorsReducer = combineReducers({
  userErrors: UsersErrorsReducer
});

export default errorsReducer;