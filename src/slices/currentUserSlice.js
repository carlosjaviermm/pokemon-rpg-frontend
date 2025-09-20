import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  user: null
}

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
    clearUser: (state) => {
      state.user = null
    }
  }
})

export const {setUser, clearUser} = currentUserSlice.actions
export default currentUserSlice.reducer