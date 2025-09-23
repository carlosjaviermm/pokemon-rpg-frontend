import { createApi } from '@reduxjs/toolkit/query/react'
import { customBaseQuery } from '../services/baseQuery';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: customBaseQuery,
  endpoints: () => ({}),
})