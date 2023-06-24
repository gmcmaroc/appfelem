import axios from 'axios';
const APP_URL = "http:// 172.16.8.223:5500/api/marhaba/";

export function AllCommand() {
    return axios.get(APP_URL + "command");
}

