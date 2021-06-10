import axios from 'axios'

export default const axiosConfig = axios.create({
    baseURL: process.env.REACT_APP_URL
});










