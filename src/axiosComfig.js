import axios from 'axios'


const axiosConfig = axios.create({
    baseURL: 'https://todo-api-learning.herokuapp.com'
});


axiosConfig.interceptors.response.use(null, error => {
    console.log('STATUS', error.response.status);
    console.log('DATA', error.response.data.message);
    return Promise.reject(error)
  })


export default axiosConfig;







