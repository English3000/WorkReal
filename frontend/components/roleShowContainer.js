import {connect} from 'react-redux';
import RoleShow from './roleShow';
import { updateRole } from '../actions/role_actions';

const mapStateToProps = ({ work, reals, navigation }) => ({
  work, reals, navigation
});

const mapDispatchToProps = dispatch => ({
  updateRole: role => dispatch(updateRole(role)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RoleShow);
