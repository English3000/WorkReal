import {connect} from 'react-redux';
import RoleForm from './roleForm';
import { createRole, createProject } from '../actions/role_actions';

const mapStateToProps = ({ session }) => ({
  currentUserId: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createRole: role => dispatch(createRole(role)),
  createProject: project => dispatch(createProject(project))
});

export default connect(mapStateToProps, mapDispatchToProps)(RoleForm);
