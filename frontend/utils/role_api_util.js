import axios from 'axios';

export const createRole = (role) => {
  axios({
    method: 'post',
    url: '/api/roles',
    data: {role}
  });
};
