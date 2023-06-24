import axios from 'axios';
const APP_URL = "http://172.16.8.223:5500/api/marhaba/";

export function login(data) {
    return axios.post(APP_URL + 'login',data);
}

export function register(name, email, password) {
    return axios.post(APP_URL + 'register',{name: name, email: email, password: password});
}