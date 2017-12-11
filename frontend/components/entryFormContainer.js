import React from 'react';
import { connect } from 'react-redux';
import { signup, signout, signin } from '../actions/session_actions';
import EntryForm from './entryForm';

const mapStateToProps = ({ session }) => ({
  session: session
});

const mapDispatchToProps = dispatch => ({
  signup: (credentials) => dispatch(signup(credentials)),
  // signout: () => dispatch(signout()),
  signin: (credentials) => dispatch(signin(credentials))

});


export default connect(mapStateToProps,mapDispatchToProps)(EntryForm);
