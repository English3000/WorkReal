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


<<<<<<< HEAD
export const signup = user => dispatch => (

  APIUtil.signup(user).then(user => (
=======
export const signup = credentials => dispatch => (
  APIUtil.signup(credentials).then(user => (
>>>>>>> 225a0cf6cf205b8b48c2f022de80a2cd9e1bce8d
    dispatch(receiveCurrentUser(user))),
    err => (
    dispatch(receiveErrors(err.responseJSON)))
  )
);

export const login = credentials => dispatch => (
  APIUtil.login(credentials).then(user => (
    dispatch(receiveCurrentUser(user))),
    err => (
    dispatch(receiveErrors(err.responseJSON)))
  )
);

export const logout = () => dispatch => (
  APIUtil.logout().then(response => (
    dispatch(receiveCurrentUser(null))
  ))


);
