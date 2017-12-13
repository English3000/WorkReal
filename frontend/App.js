import React from 'react';
import {signUp,signIn,signOut} from './actions/session_actions';
import { Provider } from 'react-redux';
import configureStore from './store';
import {createRole, fetchRoles} from './actions/role_actions';
import AppContainer from './components/appContainer';

export default class App extends React.Component {

  render() {
    let store = configureStore();
    // window testing methods don't work

  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
  }
}
