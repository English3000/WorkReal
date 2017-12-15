import {connect} from 'react-redux';
import RoleShow from './roleShow';
import { fetchRole } from '../actions/role_actions';
import { createReal } from '../actions/real_actions';

const mapStateToProps = (state, props) => ({
  roles: state.roles
});
// const mapStateToProps = ({ roles }) => ({
//   roles //will soon be work.roles
// });

const mapDispatchToProps = dispatch => ({
  fetchRole: roleId => dispatch(fetchRole(roleId)),
  createReal: real => dispatch(createReal(real))
});

export default connect(mapStateToProps, mapDispatchToProps)(RoleShow);
