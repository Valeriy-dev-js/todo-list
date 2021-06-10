import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuth: false,
        isSignup: false
    },
    reducers:{
        toggleAuth(state) {
            state.isAuth = !state.isAuth
        },
        toggleSignup(state) {
            state.isSignup = !state.isSignup
        }

    }
})

export const { toggleAuth, toggleSignup } = authSlice.actions
export default authSlice.reducer