'use client';

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface CounterState {
  value: Array<string>,
  important: Array<string>,
  complete: Array<string>
}

// Define the initial state using that type
const initialState: CounterState = {
  value: ['fix bug on #56'],
  important: [],
  complete: []
}

export const counterSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    increment: (state) => {
      state.important.push('okay')
    },
    decrement: (state) => {
      state.value.push('not okay')
    },
    addToComplete: (state, action: PayloadAction<string>) => {
      state.complete.push(action.payload)
    },
    addToFavorite: (state, action: PayloadAction<string>) => {
      state.important.push(action.payload)
    },
    incrementByAmount: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload)
    },
  },
})

export const { increment, decrement, incrementByAmount, addToFavorite, addToComplete } = counterSlice.actions

export default counterSlice.reducer