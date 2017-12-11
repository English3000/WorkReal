import * as APIUtil from '../utils/role_api_util';

export const RECEIVE_ROLE = 'RECEIVE ROLE';
export const RECEIVE_ROLE_ERRORS = 'RECEIVE_ROLE_ERRORS';

export const receiveRole = (role) => ({
  type: RECEIVE_ROLE,
  role
});

export const receiveRoleErrors = (errors) => ({
  type: RECEIVE_ROLE_ERRORS,
  errors
});

export const createRole = (role) => dispatch => (
  APIUtil.createRole(role)
    .then( newRole => {
      dispatch(receiveRole(newRole));
  },
    err => dispatch(receiveRoleErrors(err.responseJSON)))
);
