import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://accounts.zoho.com',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

export default axiosInstance;