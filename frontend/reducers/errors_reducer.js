import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import realErrorsReducer from './real_errors_reducer';

export default combineReducers({
  session: sessionErrorsReducer,
  reals: realErrorsReducer
});
