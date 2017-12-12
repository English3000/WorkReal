import React from 'react';
import EntryFormContainer from './components/entryFormContainer';
import {signUp,signIn,signOut} from './actions/session_actions';
import { Provider } from 'react-redux';
import configureStore from './store';
import {createRole, fetchRoles} from './actions/role_actions';
import RoleContainer from './components/roleContainer';
import RoleShowContainer from './components/roleShowContainer';

export default class App extends React.Component {

  render() {
    let store = configureStore();
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    window.signUp = signUp;
    window.signIn = signIn;
    window.signOut = signOut;
    window.store = store;
    window.createRole = createRole;
    window.fetchRoles = fetchRoles;

    // window testing methods don't work



  return (
    <Provider store={store}>
      <RoleShowContainer />
    </Provider>
  );
  }
}
