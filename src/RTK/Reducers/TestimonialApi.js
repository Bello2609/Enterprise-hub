import { createApi } from "@reduxjs/toolkit/query/react";
import { END_POINT } from "../../Config/Testimonial";
import { API_METHOD } from "../../Config/ApiMethod";
import { baseQueryReauth } from "./BaseApi";

export const TestimonialApi = createApi({
    reducerPath: "TestimonialReducer",
    baseQuery: baseQueryReauth,
    tagTypes: ["Testimonial"],
    endpoints: (build)=>({
        newTestimonial: build.mutation({
            query: ({ name, position, company, content, image })=>{
                return{
                    url: END_POINT.NEW_TESTIMONIAL,
                    method: API_METHOD.POST,
                    body: {
                        name,
                        position,
                        company,
                        content,
                        image
                    }
                }
            }
        }),
        getTestimonial: build.query({
            query: ()=>{
                return {
                    url: END_POINT.GET_TESTIMONIAL
                }
            }
        }),
        postService: build.mutation({
            query: ({name, phone, email, project_name, brief, file, s_type})=>{
                return{
                    url: `${END_POINT.POST_SERVICE}${s_type}/`,
                    method: API_METHOD.POST,
                    body: {
                        name,
                        phone,
                        email,
                        project_name,
                        brief,
                        file
                    }
                }
            }
        }),
        postCloud: build.mutation({
            query: (formData)=>{
                return {
                    url: END_POINT.POST_TO_CLOUD,
                    method: API_METHOD.POST,
                    body: formData
                }
            }
        })
    })
})

export const { 
    useNewTestimonialMutation,
    useGetTestimonialQuery,
    usePostServiceMutation,
    usePostCloudMutation
} = TestimonialApi
