import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { END_POINT, API_METHOD } from "../../Config/Auth";

export const AuthApi  = createApi({
    reducerPath: "AuthReducer",
    baseQuery: fetchBaseQuery({ baseUrl: "http:localhost:8000" }),
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
            query: ({name, email, password, user})=>{
                return {
                    url: END_POINT.REGISTER,
                    method: API_METHOD.POST,
                    body: {
                        name,
                        email,
                        password,
                        user
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
        })

    })
})

export const { useLoginMutation, useRegisterMutation, useForgetPasswordMutation } = AuthApi;

