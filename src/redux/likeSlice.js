import { createSlice } from "@reduxjs/toolkit";

// Part1: Define Slice (including reducers and actions)
const initialState = { likeValue: 0 };

const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    increaseOne: (state) => {
      state.likeValue = state.likeValue + 1;
    },
    decreaseOne: (state) => {
      state.likeValue = state.likeValue - 1;
    },
  },
});

// export state to global
export const selectLike = (state) => state.like.likeValue;

// export actions to global
export const { increaseOne, decreaseOne } = likeSlice.actions;

// export reducer to global
export default likeSlice.reducer;
