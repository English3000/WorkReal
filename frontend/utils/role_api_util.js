import axios from 'axios';
import { DEV_IP } from './session_api_util';

export const fetchRoles = () => axios.get(`http://${DEV_IP}:3000/api/roles`); //also fetches projects
export const fetchRole = roleId => axios.get(`http://${DEV_IP}:3000/api/roles/${roleId}`);
export const createRole = role => axios.post(
  `http://${DEV_IP}:3000/api/roles`, {role}
);
export const updateRole = role => axios.patch(
  `http://${DEV_IP}:3000/api/roles/${role.id}`, {role}
);
export const createFollow = roleId => axios.post(
  `http://${DEV_IP}:3000/api/roles/${roleId}/follows`
);
export const deleteFollow = (id, roleId) => axios.delete(
  `http://${DEV_IP}:3000/api/roles/${roleId}/truths/${id}`
);

export const createProject = project => axios.post(
  `http://${DEV_IP}:3000/api/projects`, {project}
);
export const updateProject = project => axios.patch(
  `http://${DEV_IP}:3000/api/projects/${project.id}`, {project}
);
