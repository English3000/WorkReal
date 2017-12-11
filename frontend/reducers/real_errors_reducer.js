import { REAL_ERRORS } from '../actions/real_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case REAL_ERRORS:
      return action.errors;
    default:
      return state;
  }
};
