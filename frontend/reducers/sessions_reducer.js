import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/user_action';

const _currentUser = Object.freeze(
  {currentUserId: null}
)

const SessionReducer = (state = _currentUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return { currentUserId: action.user.id};
    case LOGOUT_CURRENT_USER:
      return _currentUser;
    default:
      return state;
  }
}

export default SessionReducer;