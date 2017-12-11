import {connect} from 'react-redux';
import RoleShow from './roleShow';
import { createRole } from '../../actions/role_actions';

const mapStateToProps = state => ({
  role: state.role
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(RoleShow);
