import {connect} from 'react-redux';
// import navbarContainer from './searchBarWrapper';
import NavBar from './navBar';
import signOut from '../actions/session_actions';

const mapStateToProps = (state, props) => ({
  search: state.currentUser,
  navigation: props.navigation.navigation
});

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut())
  //placeholder
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
