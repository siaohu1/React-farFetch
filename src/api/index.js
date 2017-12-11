import axios from 'axios';

axios.defaults.baseURL = "http://localhost:6066";

axios.interceptors.response.use((res) => {
    return res.data
});

export let swiper = () => {
    return axios.get('/swiper')
};
