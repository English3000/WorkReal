import { RECEIVE_ROLE, RECEIVE_ROLES, RECEIVE_ROLE_ERRORS } from '../actions/role_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ROLE:
      return action.role;
    case RECEIVE_ROLES:
      return action.role;
    default:
      return state;
  }
};
