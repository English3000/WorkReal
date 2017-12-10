import { combineReducers } from 'redux';
import sessionsReducer  from './sessions_reducer';
 import errorsReducer from './errors_reducer';


export default combineReducers({
  session: sessionsReducer,
  errors: errorsReducer
});
