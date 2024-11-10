import axios from 'axios';

const API_URL = '/api/transfers';

export const fetchTransfers = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
