import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const ApiFetch = createApi({
    reducerPath: "ApiFetch",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fakestoreapi.com/'
    }),
    tagTypes:["Abc"],
    endpoints: (builder) => ({
        getAllPost: builder.query({
            query: (params) => ({
                url: 'products',
                method: 'GET',
                params,
            }),
            providesTags:["Abc"],
        }),
        CreatePost: builder.mutation({
            query: (newPost) => ({
                url: 'products',
                method: 'post',
                body: newPost,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                  },
            }),
            invalidatesTags:["Abc"],
        })
    })
  
})
export const {useGetAllPostQuery , useCreatePostMutation}=ApiFetch