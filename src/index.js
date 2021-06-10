import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from './axiosConfig'
import { Provider } from 'react-redux';
import { store } from './app/store'
import { setAlert } from './app/alertSlice'


// const {isAlert, message, status } = useSelector()
// const dispatch = useDispatch()


axios.interceptors.response.use(null, error => {
  const alert = {
    isAlert: true,
    message: error.response.data.message,
    status: error.response.status
  }
  store.dispatch(setAlert(alert))
  return Promise.reject(error)
});



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
