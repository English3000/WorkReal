import * as APIUtil from '../utils/role_api_util';

export const RECEIVE_ROLES = 'RECEIVE ROLES';
export const RECEIVE_ROLE = 'RECEIVE ROLE';
export const RECEIVE_ROLE_ERRORS = 'RECEIVE_ROLE_ERRORS';

export const receiveRoles = (roles) => ({
  type: RECEIVE_ROLES,
  roles
});

export const receiveRole = (role) => ({
  type: RECEIVE_ROLE,
  role
});

export const receiveRoleErrors = (errors) => ({
  type: RECEIVE_ROLE_ERRORS,
  errors
});

export const fetchRoles = () => dispatch => (
  APIUtil.fetchRoles().then(roles => dispatch(receiveRoles(roles)),
err => dispatch(receiveRoleErrors(err.response.JSON)))
);

export const fetchRole = (roleId) => dispatch => (
  APIUtil.fetchRole(roleId).then(role => dispatch(receiveRole(role)),
err => dispatch(receiveRoleErrors(err.response.JSON)))
);

export const createRole = (role) => dispatch => (
  APIUtil.createRole(role).then( newRole => dispatch(receiveRole(newRole)),
    err => dispatch(receiveRoleErrors(err.responseJSON)))
  );
