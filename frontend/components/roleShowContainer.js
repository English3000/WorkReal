import {connect} from 'react-redux';
import RoleShow from './roleShow';
import { updateRole, updateProject } from '../actions/role_actions';

const mapStateToProps = ({ work, reals, navigation, session }) => ({
  work, reals, navigation, currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  updateRole: role => dispatch(updateRole(role)),
  updateProject: project => dispatch(updateProject(project)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RoleShow);
