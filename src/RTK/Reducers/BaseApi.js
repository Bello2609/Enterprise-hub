/* eslint-disable no-unused-vars */
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { updateToken, logout } from "../Slices/AuthSlices";

// import { store } from "../store";

// store.getState().auth.access_token

const baseQuery = fetchBaseQuery({
    baseUrl: "https://enterprisehubs.onrender.com", 
    prepareHeaders: (headers, { getState })=>{
        const token = getState()?.auth?.access_token;
        console.log(token);
        // const token = store.getStore().auth.
        if(token){
            headers.set("Authorization", `Bearer ${token}`);
        }
        return headers;
    },
})
export const baseQueryReauth = async (args, api, extraOptions)=>{
    let result = await baseQuery(args, api, extraOptions);
    if(result.error && result.error.status === 401){
        const refreshResult = await baseQuery({url: "/accounts/auth/refresh_token/", method: "POST",  body: api.getState().auth.refresh_token})
        if(refreshResult.data){
            api.dispatch(updateToken(refreshResult.data));
            result = await baseQuery(args, api, extraOptions)
        }else{
            api.dispatch(logout());
        }
    }
    return result;

}
