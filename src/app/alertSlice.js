import { createSlice } from "@reduxjs/toolkit";

const alertSlice = createSlice({
    name: 'alert',
    initialState: {
        isAlert: false,
        message: '',
        status: ''
    },
    reducers:{
        setAlert(state, action){
            state.isAlert = action.payload.isAlert;
            state.message = action.payload.message;
            state.status = action.payload.status;
        },
        setIsAlert(state, action){
            state.isAlert = action.payload;
        }
    }
});

export const { setAlert, setIsAlert } = alertSlice.actions
export const selectAlert = state => state.alert
export default alertSlice.reducer


