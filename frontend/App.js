import React from 'react';
import EntryFormContainer from './components/entryFormContainer';
import {signup,login,logout} from './actions/session_actions';
import { Provider } from 'react-redux';
import configureStore from './store';
import {createRole} from './utils/role_api_util';

export default class App extends React.Component {

  render() {
    let store = configureStore();
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    window.signup = signup;
    window.login = login;
    window.logout = logout;
    window.store = store;
    window.createRole = createRole;

    debugger;



  return (
    <Provider store={store}>
      <EntryFormContainer/>
    </Provider>
  );
  }
}
