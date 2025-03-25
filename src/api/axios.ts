import axios from "axios";

const Axios = axios.create({});

Axios.interceptors.request.use((config) => {
    return config;
});

Axios.interceptors.response.use((response) => {
    return response;
});

export default Axios;