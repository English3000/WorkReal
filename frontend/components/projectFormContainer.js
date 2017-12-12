import {connect} from 'react-redux';
import ProjectForm from './projectForm';
import { createProject } from '../actions/role_actions';

// const mapStateToProps = ({ project }) => ({ });

const mapDispatchToProps = dispatch => ({
  createProject: project => dispatch(createProject(project)),
  // updateProject: project => dispatch(updateProject(project)),
});

export default connect(null, mapDispatchToProps)(ProjectForm);
