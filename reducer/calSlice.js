import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const calSlice = createSlice({
  name: "cal",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = calSlice.actions;

export default calSlice.reducer;
