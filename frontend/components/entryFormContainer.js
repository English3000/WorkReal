import React from 'react';
import { connect } from 'react-redux';
<<<<<<< HEAD
import entryForm from './entryForm';
import {signup,logout,login} from '../actions/session_actions';
=======
import EntryForm from './entryForm';

>>>>>>> 225a0cf6cf205b8b48c2f022de80a2cd9e1bce8d
const mapStateToProps = ({ session }) => ({
  session: session
});

const mapDispatchToProps = dispatch => ({
  signup: (user) => dispatch(signup(user)),
  logout: () => dispatch(logout()),
  login: (user) => dispatch(login(user))

});

<<<<<<< HEAD
export default connect(mapStateToProps,mapDispatchToProps)(entryForm);
=======
export default connect(mapStateToProps)(EntryForm);
>>>>>>> 225a0cf6cf205b8b48c2f022de80a2cd9e1bce8d
