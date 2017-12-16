import {connect} from 'react-redux';
import ProjectIndexItem from './projectIndexItem';
import { updateProject } from '../actions/role_actions';

// const mapStateToProps = ({ work, reals, navigation, session }) => ({
//   work, reals, navigation, currentUser: session.currentUser
// });

const mapDispatchToProps = dispatch => ({
  updateProject: project => dispatch(updateProject(project)),
});

export default connect(null, mapDispatchToProps)(ProjectIndexItem);
