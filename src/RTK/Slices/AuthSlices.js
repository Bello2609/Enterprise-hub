import { createSlice } from "@reduxjs/toolkit";
import { AuthApi } from "../Reducers/AuthApi";

const initialState = {
    isAuthenticated: "",
    access_token: "",
    refresh_token: "",
    first_name: "",
    last_name:""
}
const authSlice = createSlice({
    name: "Auth",
    initialState,
    reducers: {
        updateToken: (state, payload)=>{
            state.access_token = payload.access;
            state.refresh_token = payload.refresh
        },
        logout: (state)=>{
            state.isAuthenticated = false;
            state.token = ""
        }
    },
    extraReducers: (build)=>{
        build.addMatcher(
            AuthApi.endpoints.login.matchFulfilled, (state, {payload})=>{
                console.log(payload);
                state.isAuthenticated = true;
                state.access_token = payload.access;
                state.refresh_token = payload.refresh;
                state.first_name = payload.first_name;
                state.last_name = payload.last_name
            }
        );
    }
})
export const { logout } = authSlice.actions
export default authSlice.reducer