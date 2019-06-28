import axios from 'axios';
import { create } from 'istanbul-reports';


const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: { AAuthorization: `Bearer ${localStorage.getItem('token')}` }
})

export default api;