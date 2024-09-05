import { createSlice } from "@reduxjs/toolkit";
import { AuthApi } from "../Reducers/AuthApi";

const initialState = {
    isAuthenticated: false,
    access_token: "",
    refresh_token: "",
    first_name: "",
    last_name:""
}
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        updateToken: (state, action)=>{
            state.access_token = action.payload.access;
            state.refresh_token = action.payload.refresh
        },
        logout: (state)=>{
            state.isAuthenticated = false;
            state.access_token = "";
            state.refresh_token = ""
        }
    },
    extraReducers: (builder)=>{
        builder.addMatcher(
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
export const { logout, updateToken } = authSlice.actions
export default authSlice.reducer