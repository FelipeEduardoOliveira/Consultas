import axios from 'axios';

const api = axios.create({
    baseURL: 'https://apitesai.azurewebsites.net/'
});


export default api;
