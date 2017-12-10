import axios from 'axios';

export const signup = user => fetch('http://192.168.3.166:19000/api/users', {
  method: 'POST',
  body: JSON.stringify({user})
}).then(response => response.json());

export const login = user => axios.post('http://192.168.3.166:19000/api/session', user);

export const logout = () => axios.delete('http://192.168.3.166:19000/api/session');
