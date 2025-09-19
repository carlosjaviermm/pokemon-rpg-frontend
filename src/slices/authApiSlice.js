import {apiSlice} from './apiSlice'

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    signUp: build.mutation({
      query: (newUser) => ({
        url: '/users/signup',
        method: 'POST',
        body: newUser}),
        providesTags: ['Auth'] 
      }),
      logIn: build.mutation({
        query: (credentials) => ({
          url: '/users/login',
          method: 'POST',
          body: credentials}),
          providesTags: ['Auth']
      })
  })
})

export const {useSignUpMutation, useLogInMutation} = authApiSlice