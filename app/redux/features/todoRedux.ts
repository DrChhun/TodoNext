'use client';

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface CounterState {
  value: Array<string>
}

// Define the initial state using that type
const initialState: CounterState = {
  value: [],
}

export const counterSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    increment: (state) => {
      state.value.push('okay')
    },
    decrement: (state) => {
      state.value.push('not okay')
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload)
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer