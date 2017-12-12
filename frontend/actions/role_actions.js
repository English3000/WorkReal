import * as Api from '../utils/role_api_util';
import { receiveErrors } from './session_actions';

export const RECEIVE_ROLES = 'RECEIVE ROLES';
export const RECEIVE_ROLE = 'RECEIVE ROLE';
export const RECEIVE_PROJECT = 'RECEIVE PROJECT';
export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';

export const receiveRoles = (roles) => ({
  type: RECEIVE_ROLES,
  roles
});
export const receiveRole = (role) => ({
  type: RECEIVE_ROLE,
  role
});

export const receiveProject = (project) => ({
  type: RECEIVE_PROJECT,
  project
});

export const receiveFollow = details => ({
  type: FOLLOW,
  details
});
export const removeFollow = details => ({
  type: UNFOLLOW,
  details
});

export const fetchRoles = () => dispatch => (
  Api.fetchRoles().then(roles => dispatch(receiveRoles(roles)),
                        err => dispatch(receiveErrors(err.responseJSON)))
);
export const createRole = (role) => dispatch => (
  Api.createRole(role).then( newRole => dispatch(receiveRole(newRole)),
                             err => dispatch(receiveErrors(err.responseJSON)))
);

export const createProject = (project) => dispatch => (
  Api.createProject(project).then( newProject => dispatch(receiveProject(newProject)),
                                   err => dispatch(receiveErrors(err.responseJSON)))
);

export const createFollow = role => async (dispatch) => (
  dispatch(receiveFollow(await Api.createFollow(role)))
);
export const deleteFollow = role => async (dispatch) => (
  dispatch(removeFollow(await Api.deleteFollow(role)))
);
