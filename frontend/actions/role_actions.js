import * as Api from '../utils/role_api_util';
import { receiveErrors } from './session_actions';

export const RECEIVE_ROLES = 'RECEIVE ROLES';
export const RECEIVE_ROLE = 'RECEIVE ROLE';
export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const RECEIVE_PROJECT = 'RECEIVE PROJECT';

export const receiveRoles = roles => ({type: RECEIVE_ROLES, roles});
export const receiveRole = role => ({type: RECEIVE_ROLE, role });
export const patchRole = role => ({type: UPDATE_ROLE, role});

export const receiveFollow = details => ({type: FOLLOW, details});
export const removeFollow = details => ({type: UNFOLLOW, details});

export const receiveProject = project => ({type: RECEIVE_PROJECT, project});

export const fetchRoles = () => dispatch => Api.fetchRoles().then(
  roles => dispatch(receiveRoles(roles)),
  err => dispatch(receiveErrors(err.response.data))
);
export const fetchRole = roleId => dispatch => Api.fetchRole(roleId).then(
  role => dispatch(receiveRole(role)),
  err => dispatch(receiveErrors(err.response.data))
);

export const createRole = role => dispatch => Api.createRole(role).then(
  newRole => {
    dispatch(receiveRole(newRole));
    return newRole;
  }, err => dispatch(receiveErrors(err.response.data))
);

//needs to update role w/o overwriting assoc'd data (past projects & reals)
//risk of currentRole's location falling out of sync w/ currentProject's
export const updateRole = role => dispatch => Api.updateRole(role).then(
  newRole => dispatch(patchRole(newRole)),
  err => dispatch(receiveErrors(err.response.data))
);

export const createFollow = roleId => async (dispatch) => dispatch(
  receiveFollow(await Api.createFollow(roleId))
);
export const deleteFollow = (id, roleId) => async (dispatch) => dispatch(
  removeFollow(await Api.deleteFollow(id, roleId))
);

export const createProject = project => dispatch => Api.createProject(project).then(
  newProject => {
    dispatch(receiveProject(newProject));
    return newProject;
  }, err => dispatch(receiveErrors(err.response.data))
);
