import axios from 'axios'

const Service = axios.create({
    // baseURL: "http://127.0.0.1:8190/",
    baseURL: "http://193.32.148.226:8190/",
    timeout: 100000,
});


export default Service;