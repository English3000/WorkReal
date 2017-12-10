import React from 'react';
import merge from 'lodash/merge';
import {RECEIVE_CURRENT_USER} from '../actions/session_actions';

const _nullUser = {
  currentUser: null
}

const sessionsReducer = (state = _nullUser, action) => {
  Object.freeze(state);

  let newState = merge({},state);

  switch(action.type){
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, {currentUser}) ;

    default:
      return state;
  }



}

export default sessionsReducer;
