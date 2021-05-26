import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import axios from './axiosComfig'



axios.interceptors.response.use(null, error => {
  console.log('STATUS', error.response.status);
  console.log('DATA', error.response.data.message);
  return Promise.reject(error)
});


ReactDOM.render(
  <React.StrictMode>
    <App />
          <Snackbar open={alert.open} autoHideDuration={2000}>
        <Alert severity="error">
          {`Status: ${alert.status} 
            Message: ${alert.message}`}
        </Alert>
      </Snackbar>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
