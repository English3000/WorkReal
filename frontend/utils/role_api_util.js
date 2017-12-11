import axios from 'axios';

export const createRole = (role) => {
  axios({
    method: 'post',
    url: 'http://localhost:3000/api/roles',
    data: {role}
  });
};
