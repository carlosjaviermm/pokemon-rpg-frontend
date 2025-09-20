import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './slices/apiSlice'
import currentUserReducer from './slices/currentUserSlice'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(apiSlice.middleware)
})

setupListeners(store.dispatch)