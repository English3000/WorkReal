import axios from 'axios';
import { DEV_IP } from './session_api_util';

export const fetchRoles = () => ( //also fetches projects
  axios.get(`http://${DEV_IP}:3000/api/roles`)
);
export const createRole = (role) => (
  axios.post(`http://${DEV_IP}:3000/api/roles`, {role})
);

export const createProject = (project) => (
  axios.post(`http://${DEV_IP}:3000/api/projects`, {project})
);
