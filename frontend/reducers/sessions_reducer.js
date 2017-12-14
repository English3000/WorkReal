import React from 'react';
import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_ROLE } from '../actions/role_actions';

const _nullUser = { currentUser: null };

export default (state = _nullUser, action) => {
  Object.freeze(state);

  let newState = merge({},state);

  switch(action.type){
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, {currentUser}) ;
    case RECEIVE_ROLE:
      newState.currentUser.role_ids.unshift(action.role.id);
      return newState;
    default:
      return state;
  }
};
