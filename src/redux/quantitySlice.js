import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0,
}

export const quantitySlice = createSlice({
  name: 'quantity',
  initialState,
  reducers: {
  
    incrementByAmount: (state, action) => {
      state.count += action.payload
    },
    decrementByAmount: (state, action) => {
      state.count -=  action.payload
    },
    reset:(state,action)=>{
      state.count =  action.payload
      
    }
  },
})

// Action creators are generated for each case reducer function
export const {  incrementByAmount ,decrementByAmount,reset} = quantitySlice.actions

export default quantitySlice.reducer