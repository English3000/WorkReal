import axios from 'axios';
import { DEV_IP } from './session_api_util';

export const fetchRoles = () => (
  axios.get(`http://${DEV_IP}:3000/api/roles`)
);

export const createRole = (role) => (
  axios.post(`http://${DEV_IP}:3000/api/roles`, {role})
);
