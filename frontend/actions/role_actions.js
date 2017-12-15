import * as Api from '../utils/role_api_util';
import { receiveErrors } from './session_actions';

export const RECEIVE_ROLES = 'RECEIVE ROLES';
export const RECEIVE_ROLE = 'RECEIVE ROLE';
export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const RECEIVE_PROJECT = 'RECEIVE PROJECT';

export const receiveRoles = work => ({type: RECEIVE_ROLES, work});
export const receiveRole = role => ({type: RECEIVE_ROLE, role });

export const receiveFollow = details => ({type: FOLLOW, details});
export const removeFollow = details => ({type: UNFOLLOW, details});

export const receiveProject = project => ({type: RECEIVE_PROJECT, project});

export const fetchRoles = () => dispatch => Api.fetchRoles().then(
  work => dispatch(receiveRoles(work.data)),
  err => dispatch(receiveErrors(err.response.data))
);
// export const fetchRole = roleId => dispatch => Api.fetchRole(roleId).then(
//   work => dispatch(receiveRole(work.data)),
//   err => dispatch(receiveErrors(err.response.data))
// );
export const createRole = role => dispatch => Api.createRole(role).then(
  role => { dispatch(receiveRole(role.data));
    return role.data;
  }, err => dispatch(receiveErrors(err.response.data))
);
//needs to update role w/o overwriting assoc'd data (past projects & reals)
//risk of currentRole's location falling out of sync w/ currentProject's
export const updateRole = role => dispatch => Api.updateRole(role).then(
  revRole => dispatch(receiveRole(revRole.data)),
  err => dispatch(receiveErrors(err.response.data))
);

export const createFollow = roleId => async (dispatch) => dispatch(
  receiveFollow(await Api.createFollow(roleId).data)
);
export const deleteFollow = (id, roleId) => async (dispatch) => dispatch(
  removeFollow(await Api.deleteFollow(id, roleId).data)
);

export const createProject = project => dispatch => Api.createProject(project).then(
  newProject => { dispatch(receiveProject(newProject.data));
    return newProject.data;
  }, err => dispatch(receiveErrors(err.response.data))
);
export const updateProject = project => dispatch => Api.updateProject(project).then(
  revProject => dispatch(receiveProject(revProject.data)),
  err => dispatch(receiveErrors(err.response.data))
);
