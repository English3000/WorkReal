import * as APIUtil from '../utils/real_api';

export const RECEIVE_REALS = 'RECEIVE_REALS';
export const RECEIVE_REAL = 'RECEIVE_REAL';
export const UPDATE_REAL = 'UPDATE_REAL';
export const REMOVE_REAL = 'REMOVE_REAL';
export const TRUTH = 'TRUTH';
export const UNTRUTH = 'UNTRUTH';
export const REAL_ERRORS = 'REAL_ERRORS';

const receiveReals = reals => ({
  type: RECEIVE_REALS,
  reals
});
const receiveReal = real => ({
  type: RECEIVE_REAL,
  real
});
const patchReal = real => ({
  type: UPDATE_REAL,
  real
});
const removeReal = real => ({
  type: REMOVE_REAL,
  realId: real.id
});

const receiveRealErrors = errors => ({
  type: REAL_ERRORS,
  errors
});

const receiveTruth = details => ({
  type: TRUTH,
  details
});
const removeTruth = details => ({
  type: UNTRUTH,
  details
});

const getAllReals = () => async (dispatch) => {
  // dispatch(pageLoading());
  return dispatch(receiveReals(await APIUtil.getAllReals()));
};
// Search query also launches filtered GET request
const createReal = real => dispatch => (
  APIUtil.createReal(real)
    .then(newReal => dispatch(receiveReal(newReal)),
          err => dispatch(receiveRealErrors(err.responseJSON)))
);
const updateReal = real => dispatch => (
  APIUtil.updateReal(real).then(newReal => dispatch(patchReal(newReal)))
);
const deleteReal = id => async (dispatch) => (
  dispatch(removeReal(await APIUtil.deleteReal(id)))
);

const createTruth = real => async (dispatch) => (
  dispatch(receiveTruth(await APIUtil.createTruth(real)))
);
const deleteTruth = real => async (dispatch) => (
  dispatch(removeTruth(await APIUtil.deleteTruth(real)))
);
