import React from 'react';
import EntryFormContainer from './components/entryFormContainer';
import { Provider } from 'react-redux';
import configureStore from './store';

export default class App extends React.Component {

  render() {

  return (
    <Provider store={configureStore()}>
      <EntryFormContainer/>
    </Provider>
  );
  }
}
