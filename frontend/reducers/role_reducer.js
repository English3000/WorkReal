import { RECEIVE_ROLES, RECEIVE_ROLE,
         RECEIVE_PROJECT } from '../actions/role_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_ROLES:
      return action.roles;
    case RECEIVE_ROLE:
      newState[action.role.id] = action.role;
      return newState;
    case RECEIVE_PROJECT:
      // newState[action.project.role_id] ...
    default:
      return state;
  }
};
