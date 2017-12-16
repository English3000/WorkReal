import {connect} from 'react-redux';
// import navbarContainer from './searchBarWrapper';
import NavBar from './navBar';

const mapStateToProps = (state, props) => ({
  search: state.currentUser
});

const mapDispatchToProps = dispatch => ({
  //placeholder
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
