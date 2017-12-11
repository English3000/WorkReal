import React from 'react';
import EntryFormContainer from './components/entryFormContainer';
import {signup,login,logout} from './actions/session_actions';
import { Provider } from 'react-redux';
import configureStore from './store';
// import $ from 'jquery';

export default class App extends React.Component {

  render() {
    let store = configureStore()

    window.getState = store.getState;
    window.dispatch = store.dispatch;

    window.signup = signup;
    window.login = login;
    window.logout = logout;

    // window testing methods don't work



  return (
    <Provider store={store}>
      <EntryFormContainer />
    </Provider>
  );
  }
}
