import axios from 'axios';

// Unique url of deployed sculpture-drf-api:
axios.defaults.baseURL = 'https://sculpture-drf-api-2aa8ed66624d.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();