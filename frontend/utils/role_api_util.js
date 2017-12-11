import axios from 'axios';

export const fetchRoles = () => (
  axios.get('http://localhost:3000/api/roles')
);

export const createRole = (role) => (
  axios.post('http://localhost:3000/api/roles', {role})
);
