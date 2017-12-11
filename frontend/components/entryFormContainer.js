import React from 'react';
import { connect } from 'react-redux';

import entryForm from './entryForm';
import {signup,logout,login} from '../actions/session_actions';

import EntryForm from './entryForm';


const mapStateToProps = ({ session }) => ({
  session: session
});

const mapDispatchToProps = dispatch => ({
  signup: (credentials) => dispatch(signup(credentials)),
  logout: () => dispatch(logout()),
  login: (user) => dispatch(login(user))

});


export default connect(mapStateToProps,mapDispatchToProps)(entryForm);
