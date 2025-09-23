import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './slices/apiSlice'
import currentUserReducer from './slices/currentUserSlice'
import tokenReducer from './slices/tokenSlice'
import modalReducer from './slices/modalSlice'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    token: tokenReducer,
    modal:modalReducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(apiSlice.middleware)
})

setupListeners(store.dispatch)