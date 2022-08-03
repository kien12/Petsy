import * as UserApiUtil from '../util/user_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  }
}

const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER,
  }
}

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  }
}

const signup = (user) => dispatch => {
  return UserApiUtil.signup(user)
    .then( 
      user => dispatch(receiveCurrentUser(user)),
      errors => dispatch(receiveErrors(errors.responseJSON))
    )
}

const login = (user) => dispatch => {
  return UserApiUtil.login(user)
    .then(
      user => dispatch(receiveCurrentUser(user)),
      errors => dispatch(receiveErrors(errors.responseJSON))
    )
}

const logout = () => dispatch => {
  return UserApiUtil.logout()
    .then(
      () => dispatch(logout()),
      errors => dispatch(receiveErrors(errors.responseJSON))
    )
}