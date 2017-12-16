import {connect} from 'react-redux';
import SearchMap from './searchMap';

const mapStateToProps = (state, props) => ({
  search: state.currentUser
});

const mapDispatchToProps = dispatch => ({
  //placeholder
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchMap);
