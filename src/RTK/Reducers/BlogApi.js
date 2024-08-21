import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { END_POINT } from "../../Config/Blog";
import { API_METHOD } from "../../Config/ApiMethod";

export const BlogApi = createApi({
    reducerPath: "BlogReducer",
    baseQuery: fetchBaseQuery({ baseUrl: "https://enterprisehubs.onrender.com/"  }),
    tagTypes: ["Blog"],
    endpoints: (build)=>({
        createBlog: build.mutation({
            query: ({category, title, content, image, author})=>{
                return {
                    url: END_POINT.CREATE_BLOG,
                    method: API_METHOD.POST,
                    body: {
                        category,
                        title,
                        content,
                        image,
                        author
                    }
                }
            }
        }),
        
    })
})

export const { useCreateBlogMutation } = BlogApi;