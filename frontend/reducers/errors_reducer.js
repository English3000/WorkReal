import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
// import roleErrorsReducer from './role_errors_reducer';
// import realErrorsReducer from './real_errors_reducer';
// roles: roleErrorsReducer
// reals: realErrorsReducer,

export default combineReducers({
  session: sessionErrorsReducer,
});
