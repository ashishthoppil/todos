import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const todoSlice = createSlice({
  name: 'todosList',
  initialState,
  reducers: {
    addToList: (state = initialState, action) => {
        console.log(action.payload);
        state.value = action.payload;
    },
  },
})

export const { addToList } = todoSlice.actions

export default todoSlice.reducers