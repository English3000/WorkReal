import {combineReducers} from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import roleErrorsReducer from './role_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  role: roleErrorsReducer

});

export default errorsReducer;
