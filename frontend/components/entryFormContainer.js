import React from 'react';
import { connect } from 'react-redux';
import entryForm from './entryForm';
import {signup,logout,login} from '../actions/session_actions';
const mapStateToProps = ({ session }) => ({
  session: session
});

const mapDispatchToProps = dispatch => ({
  signup: (user) => dispatch(signup(user)),
  logout: () => dispatch(logout()),
  login: (user) => dispatch(login(user))

});

export default connect(mapStateToProps,mapDispatchToProps)(entryForm);
