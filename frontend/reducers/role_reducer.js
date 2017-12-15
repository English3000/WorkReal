import { RECEIVE_ROLES, RECEIVE_ROLE,
         RECEIVE_PROJECT } from '../actions/role_actions';
import merge from 'lodash/merge';

const _defaultState = {roles: {}, projects: {}};

export default (state = _defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_ROLES:
      return merge(newState, action.work);
    case RECEIVE_ROLE:
      console.log(action.role);
      newState.roles[action.role.id] = action.role;
      // newState.projects = merge(newState.projects, action.work.projects);
      return newState;
    case RECEIVE_PROJECT:
      newState.roles[action.project.role_id].project_ids.unshift(action.project.id);
      newState.projects[action.project.id] = action.project;
      return newState;
    default:
      return state;
  }
};
