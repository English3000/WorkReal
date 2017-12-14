import {connect} from 'react-redux';
import RoleShow from './roleShow';
import { fetchRole } from '../actions/role_actions';

const mapStateToProps = ({ session, roles }) => ({
  currentUser: session.currentUser,
  roles //will soon be work.roles
});

const mapDispatchToProps = dispatch => ({
  fetchRole: roleId => dispatch(fetchRole(roleId))
});

export default connect(mapStateToProps, mapDispatchToProps)(RoleShow);
