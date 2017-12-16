import axios from 'axios';
import { DEV_IP } from './session_api_util';

export const createReal = real => axios.post(
  `http://${DEV_IP}:3000/api/reals`, {real}
);

export const getAllReals = () => axios.get(
  `http://${DEV_IP}:3000/api/reals`
);

export const updateReal = real => axios.patch(
  `http://${DEV_IP}:3000/api/reals/${real.id}`, {real}
);
export const createTruth = realId => axios.post(
  `http://${DEV_IP}:3000/api/reals/${realId}/truths`
);
export const destroyTruth = (id, realId) => axios.delete(
  `http://${DEV_IP}:3000/api/reals/${realId}/truths/${id}`
);
