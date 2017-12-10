import React from 'react';
import EntryFormContainer from './entryFormContainer';
import {Provider} from 'react-redux';
import configureStore from './store/store';

export default class App extends React.Component {
  render() {
    let store = configureStore();

    return (
      <Provider store={store}>
        <EntryFormContainer />
      </Provider>
    );
  }
}
