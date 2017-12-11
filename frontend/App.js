import React from 'react';
import EntryFormContainer from './components/entryFormContainer';
import {signup,signin,signout} from './actions/session_actions';
import { Provider } from 'react-redux';
import configureStore from './store';
import {createRole, fetchRoles} from './actions/role_actions';

export default class App extends React.Component {

  render() {
    let store = configureStore();
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    window.signup = signup;
    window.signin = signin;
    window.signout = signout;
    window.store = store;
    window.createRole = createRole;
    window.fetchRoles = fetchRoles;

    // window testing methods don't work



  return (
    <Provider store={store}>
      <EntryFormContainer />
    </Provider>
  );
  }
}
