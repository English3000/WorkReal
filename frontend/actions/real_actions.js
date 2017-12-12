import * as Api from '../utils/real_api';
import { receiveErrors } from './session_actions';

export const RECEIVE_REALS = 'RECEIVE_REALS';
export const RECEIVE_REAL = 'RECEIVE_REAL';
export const UPDATE_REAL = 'UPDATE_REAL';
export const REMOVE_REAL = 'REMOVE_REAL';
export const TRUTH = 'TRUTH';
export const UNTRUTH = 'UNTRUTH';

export const receiveReals = reals => ({
  type: RECEIVE_REALS,
  reals
});
export const receiveReal = real => ({
  type: RECEIVE_REAL,
  real
});
export const patchReal = real => ({
  type: UPDATE_REAL,
  real
});
export const removeReal = real => ({
  type: REMOVE_REAL,
  realId: real.id
});

export const receiveTruth = details => ({
  type: TRUTH,
  details
});
export const removeTruth = details => ({
  type: UNTRUTH,
  details
});

export const getAllReals = () => async (dispatch) => {
  // dispatch(pageLoading());
  return dispatch(receiveReals(await APIUtil.getAllReals()));
};
// Search query also launches filtered GET request
export const createReal = real => dispatch => (
  Api.createReal(real)
    .then(newReal => dispatch(receiveReal(newReal)),
          err => dispatch(receiveErrors(err.responseJSON)))
);
export const updateReal = real => dispatch => (
  Api.updateReal(real).then(newReal => dispatch(patchReal(newReal)))
);
export const deleteReal = id => async (dispatch) => (
  dispatch(removeReal(await Api.deleteReal(id)))
);

export const createTruth = real => async (dispatch) => (
  dispatch(receiveTruth(await Api.createTruth(real)))
);
export const deleteTruth = real => async (dispatch) => (
  dispatch(removeTruth(await Api.deleteTruth(real)))
);
