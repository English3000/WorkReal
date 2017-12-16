import { RECEIVE_ROLES, RECEIVE_ROLE,
         RECEIVE_PROJECT } from '../actions/role_actions';
import { RECEIVE_REALS } from '../actions/real_actions';

import merge from 'lodash/merge';

const _defaultState = {roles: {}, projects: {}};

export default (state = _defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_ROLES:
      return merge(newState, action.work);
    case RECEIVE_REALS:
      return merge(newState, action.reals.roles);
    case RECEIVE_ROLE:
      newState.roles[action.role.id] = action.role;
      return newState;
    case RECEIVE_PROJECT:
      newState.roles[action.project.role_id].project_ids.unshift(action.project.id);
      newState.projects[action.project.id] = action.project;
      return newState;
    default:
      return state;
  }
};
