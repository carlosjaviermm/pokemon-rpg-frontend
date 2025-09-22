import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  open: false
}

const modalSlice = createSlice ({
  name:'modal',
  initialState,
  reducers: {
    closeModal: (state) => {state.open = false},
    openModal: (state) => {state.open = true}
  }
})

export const { openModal, closeModal } = modalSlice.actions
export default modalSlice.reducer