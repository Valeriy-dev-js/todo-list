import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuth: true,
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
export const selectIsAuth = state => state.auth.isAuth
export const selectIsSignup = state => state.auth.isSignup
export default authSlice.reducer