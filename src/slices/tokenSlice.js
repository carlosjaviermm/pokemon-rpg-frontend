import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  expired: false
}

const tokenSlice = createSlice ({
  name:'token',
  initialState,
  reducers: {
    setTokenExpired: (state, action) => {
      state.expired = action.payload
    }
  }
})

export const { setTokenExpired } = tokenSlice.actions
export default tokenSlice.reducer