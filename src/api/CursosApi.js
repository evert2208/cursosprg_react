import axios from 'axios';
import { getEnvVariables } from '../helpers';

const { VITE_LOCAL_URL, VITE_API_URL } = getEnvVariables();

const cursosApi = axios.create({
    baseURL: VITE_API_URL
        // baseURL: VITE_LOCAL_URL
});

//interceptores
cursosApi.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
})

export default cursosApi;