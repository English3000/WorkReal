import React from 'react';
import { connect } from 'react-redux';
import { signUp, signOut, signIn } from '../actions/session_actions';
import EntryForm from './entryForm';

const mapStateToProps = (state) => ({
  session: state.session,
  errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
  signUp: (credentials) => dispatch(signUp(credentials)),
  // signOut: () => dispatch(signOut()),
  signIn: (credentials) => dispatch(signIn(credentials))

});


export default connect(mapStateToProps,mapDispatchToProps)(EntryForm);
