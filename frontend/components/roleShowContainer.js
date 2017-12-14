import {connect} from 'react-redux';
import RoleShow from './roleShow';
import { fetchRole } from '../actions/role_actions';
<<<<<<< HEAD
import { createReal } from '../actions/real_actions';
const mapStateToProps = (state, props) => ({
  roles: state.roles
=======

const mapStateToProps = ({ roles }) => ({
  roles //will soon be work.roles
>>>>>>> afee45f05e41d8d99d1e8eefea2504184eaf1a32
});

const mapDispatchToProps = dispatch => ({
  fetchRole: roleId => dispatch(fetchRole(roleId)),
  createReal: real => dispatch(createReal(real))
});

export default connect(mapStateToProps, mapDispatchToProps)(RoleShow);
