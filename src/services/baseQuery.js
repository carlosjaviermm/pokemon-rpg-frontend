import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { store } from '../store'; // tu store
import { openModal } from '../slices/modalSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http:///localhost:3001/api', 
  prepareHeaders: (headers, { getState }) => {
    const token = getState().currentUser?.user?.token;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const customBaseQuery = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);

  // si el server responde 401, abrimos el modal
  if (result.error?.status === 401) {
    store.dispatch(openModal());
  }

  return result;
};
