import { combineReducers } from 'redux';
import sessionsReducer  from './sessions_reducer';
import errorsReducer from './errors_reducer';
import roleReducer from './role_reducer';
import realsReducer from './reals_reducer';
import nav from './nav_reducer';


export default combineReducers({
  work: roleReducer,
  reals: realsReducer,
  session: sessionsReducer,
  errors: errorsReducer,
  navigation: nav
});
