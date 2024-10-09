import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 1,
  step: 1,
};

const slice = createSlice({
  name: "counter",
  initialState,
  selectors: {
    selectCounter: (state) => state.counter,
    selectSet: (state) => state.set,
  },
  reducers: {
    increment: (state, action) => {
      state.counter += state.step;
    },
    decrement: (state, action) => {
      state.counter -= state.step;
    },
    reset: (state, action) => initialState,
    changeStep: (state, action) => {
      state.step = action.payload;
    },
  },
});

export const counterReducer = slice.reducer;
export const { increment, decrement, reset, changeStep } = slice.actions;
export const { selectCounter, selectSet } = slice.selectors;
