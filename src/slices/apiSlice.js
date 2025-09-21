import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http:///localhost:3001/api',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().currentUser?.user?.token
      console.log('TOKEN en prepareHeaders:', token) // 👈 log para debug
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  endpoints: () => ({}),
})