import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({baseUrl: 'http:///localhost:3001/api'}),
  tagTypes: ['User', 'Auth'],
  endpoints: () => ({})
})