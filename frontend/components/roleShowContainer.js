import {connect} from 'react-redux';
import RoleShow from './roleShow';
import { fetchRole } from '../../actions/role_actions';

const mapStateToProps = (state, props) => ({
  role: state.role
});

const mapDispatchToProps = dispatch => ({
  fetchRole: roleId => dispatch(fetchRole(roleId))
});

export default connect(mapStateToProps, mapDispatchToProps)(RoleShow);
