import { RECEIVE_REALS, RECEIVE_REAL,
         UPDATE_REAL, REMOVE_REAL,
         TRUTH, UNTRUTH } from '../actions/real_actions';
import merge from 'lodash/merge';

const _defaultState = {
  all_ids: [],
  by_id: {}
};

export default (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_REALS:
      return action.reals;
    case RECEIVE_REAL:
      newState.all_ids.unshift(action.real.id);
      newState.by_id[action.real.id] = action.real;
      return newState;
    case UPDATE_REAL:
      newState.by_id[action.real.id] = action.real;
      return newState;
    case REMOVE_REAL:
      delete newState.by_id[action.realId];
      newState.all_ids.splice(newState.all_ids.indexOf(action.realId), 1);
      return newState;
    case TRUTH:
    case UNTRUTH:
      newState.by_id[action.details.realId].truths = action.details.truths;
    default:
      return state;
  }
};
