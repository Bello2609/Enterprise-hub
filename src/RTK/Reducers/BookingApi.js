import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryReauth } from "./BaseApi";
import { END_POINT } from "../../Config/Booking";
import { API_METHOD } from "../../Config/ApiMethod";


export const BookingApi = createApi({
    reducerPath: "BookingReducer",
    baseQuery: baseQueryReauth,
    tagTypes: ["Booking"],
    endpoints: (build)=>({
        postbooking: build.mutation({
            query: ({ member, unit, book_from, category, book_to })=>{
                return {
                    url: END_POINT.POST_BOOKING,
                    method: API_METHOD.POST,
                    body: {
                        member,
                        unit,
                        book_from,
                        category,
                        book_to
                    }
                }
            }
        })
    })
}) 
export const {
    usePostbookingMutation
} = BookingApi