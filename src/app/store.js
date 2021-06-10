import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from '../components/auth/authSlice'




export const store = configureStore({
    reduser:{
        auth: authReducer,
    },
});