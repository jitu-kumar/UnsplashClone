import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const getApi = createApi({
    reducerPath:'getApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.unsplash.com/',

    }),
    endpoints:(builder)=>({
        getAllImage: builder.query({
            query:(search)=>({
                url: `${search==""?"":"search"}/photos?${search==""?"":`&query=${search}`}&client_id=XBCIcBqAsSjZNSWLMSPlQ4yjgjpE9agUrfzi14JY_Kk`,
                method: "GET"
            })
        })
    })
})

export const { useGetAllImageQuery } = getApi