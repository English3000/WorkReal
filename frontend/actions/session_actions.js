import axios from 'axios';
import * as APIUtil from '../utils/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";


export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser

});

export const receiveErrors = errors => {
  console.log(errors);
  return(
    type: RECEIVE_ERRORS,
    errors
  );
};


export const signUp = credentials => dispatch => (
  APIUtil.signUp(credentials)
    .then(user => dispatch(receiveCurrentUser(user)),
          err => dispatch(receiveErrors(err.responseJSON))
  )
);

 // dispatch(receiveErrors(err.responseJSON)
export const signIn = credentials => dispatch => (
  APIUtil.signIn(credentials).then(user => dispatch(receiveCurrentUser(user)),
                                  err =>  dispatch(receiveErrors(err.response.data))
  )

);

export const signOut = () => dispatch => (
  APIUtil.signOut().then(response => dispatch(receiveCurrentUser(null))
  )
);
