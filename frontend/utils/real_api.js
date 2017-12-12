import axios from 'axios';
import { DEV_IP } from './session_api_util';

export const createReal = real => axios.post(
  `http://${DEV_IP}:3000/api/reals`, {real}
);
export const updateReal = real => axios.patch(
  `http://${DEV_IP}:3000/api/reals/${real.id}`, {real}
);
