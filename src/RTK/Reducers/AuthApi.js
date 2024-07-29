import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { END_POINT, API_METHOD } from "../../Config/Auth";

export const AuthApi  = createApi({
    reducerPath: "AuthReducer",
    baseQuery: fetchBaseQuery({ baseUrl: "https://enterprisehubs.onrender.com/" }),
    tagTypes: ["Auth"],
    endpoints: (build)=>({
        login: build.mutation({
            query: ({email, password})=>{
                return {
                    url: END_POINT.LOGIN,
                    method: API_METHOD.POST,
                    body: {email, password}
                }
            }
        }),
        register: build.mutation({
            query: ({email, username, first_name, last_name, password, password2, client_type})=>{
                return {
                    url: END_POINT.REGISTER,
                    method: API_METHOD.POST,
                    body:{
                        email,
                        username,
                        first_name,
                        last_name,
                        password,
                        password2,
                        client_type
                    }
                }
            }
        }),
        forgetPassword: build.mutation({
            query: ({ email })=>{
                return{
                    url: END_POINT.FORGET_PASSWORD,
                    method: API_METHOD.POST,
                    body: { email }
                }
            }
        }),
        resetPassword: build.mutation({
            query: ({ token, new_password })=>{
                return{
                    url: END_POINT.NEW_PASSWORD,
                    method: API_METHOD.POST,
                    body: {
                        token,
                        new_password
                    }
                }
            }
        }),
        verifyAccount: build.mutation({
            query: ({ token })=>{
                return{
                    url: END_POINT.VERIFY,
                    method: API_METHOD.POST,
                    body: {
                        token
                    }
                }
            }
        })

    })
})

export const { 
    useLoginMutation, 
    useRegisterMutation, 
    useForgetPasswordMutation,
    useResetPasswordMutation,
    useVerifyAccountMutation   
 } = AuthApi;

