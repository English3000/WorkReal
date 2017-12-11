import {RECEIVE_ROLE_ERRORS} from '../actions/role_actions';

const roleErrorsReducer = (state = [], action) => {
  switch(action.type){
  case RECEIVE_ROLE_ERRORS:
    return action.errors;
  default:
    return state;
  }
};

export default roleErrorsReducer;
