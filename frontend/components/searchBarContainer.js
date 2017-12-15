import {connect} from 'react-redux';
import SearchBar from './searchBar';

const mapStateToProps = (state, props) => ({
  search: state.currentUser
});

const mapDispatchToProps = dispatch => ({
  //placeholder
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
