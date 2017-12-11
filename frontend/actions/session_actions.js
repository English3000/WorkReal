import axios from 'axios';
import * as APIUtil from '../utils/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";


export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser

});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});


export const signup = credentials => dispatch => (
  APIUtil.signup(credentials)
    .then(user => dispatch(receiveCurrentUser(user)),
          err => dispatch(receiveErrors(err.responseJSON))
  )
);

export const login = credentials => dispatch => (
  APIUtil.login(credentials).then(user => dispatch(receiveCurrentUser(user)),
                                  err => dispatch(receiveErrors(err.responseJSON))
  )
);

export const logout = () => dispatch => (
  APIUtil.logout().then(response => dispatch(receiveCurrentUser(null))
  )
);
