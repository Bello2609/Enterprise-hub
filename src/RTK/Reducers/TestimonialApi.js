import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { END_POINT } from "../../Config/Testimonial";
import { API_METHOD } from "../../Config/ApiMethod";

export const TestimonialApi = createApi({
    reducerPath: "TestimonialReducer",
    baseQuery: fetchBaseQuery({ baseUrl: "https://enterprisehubs.onrender.com/" }),
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
        })
    })
})

export const { 
    useNewTestimonialMutation,
    useGetTestimonialQuery
} = TestimonialApi
