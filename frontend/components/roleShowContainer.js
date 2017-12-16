import {connect} from 'react-redux';
import RoleShow from './roleShow';
import { updateRole, followRole, unfollowRole } from '../actions/role_actions';

const mapStateToProps = ({ work, reals, navigation, session }) => ({
  work, reals, navigation, currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  updateRole: role => dispatch(updateRole(role)),
  followRole: id => dispatch(followRole(id)),
  unfollowRole: id => dispatch(unfollowRole(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RoleShow);
