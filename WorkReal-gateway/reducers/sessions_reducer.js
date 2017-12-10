import React from 'react';
import merge from 'lodash/merge';

const _nullUser = {
  currentUser: null
}

const sessionsReducer = (state = _nullUser, action) => {
  Object.freeze(state);

  let newState = merge({},state);

  switch(action.type){
    default:
      return state;
  }



}

export default sessionsReducer;
