import {connect} from 'react-redux';
import RoleForm from './roleForm';
import { createRole } from '../actions/role_actions';

const mapStateToProps = state => ({
  role: state.role
});

const mapDispatchToProps = dispatch => ({
  createRole: role => dispatch(createRole(role))
});

export default connect(mapStateToProps, mapDispatchToProps)(RoleForm);
