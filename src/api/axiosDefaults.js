import axios from 'axios';

// Unique url of deployed sculpture-drf-api:
axios.defaults.baseURL = 'https://london-outdoor-sculpture-392a8873bf1b.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();