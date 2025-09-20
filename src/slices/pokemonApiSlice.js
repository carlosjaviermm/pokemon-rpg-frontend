import {apiSlice} from './apiSlice'

export const pokemonApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    catchPokemon: build.mutation({
      query: ({user_id, pokemon_id}) => ({
        url: '/pokemon/catch',
        method:'POST',
        body:{user_id, pokemon_id}
      }),
      providesTags: ['Pokemon']
    }),
    getStarters: build.query({
      query: () => '/pokemon/starters'
    })
  })
})

export const {useCatchPokemonMutation, useGetStartersQuery} = pokemonApiSlice