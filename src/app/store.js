import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../components/auth/authSlice'
import alertReducer from './alertSlice'




export const store = configureStore({
    reducer: {
      auth: authReducer,
      alert: alertReducer,
    },
  });