import { combineReducers } from 'redux';
import sessionsReducer  from './sessions_reducer';
import errorsReducer from './errors_reducer';
import roleReducer from './role_reducer';


export default combineReducers({
  role: roleReducer,
  session: sessionsReducer,
  errors: errorsReducer
});
