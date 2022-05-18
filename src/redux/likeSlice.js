import { createSlice } from "@reduxjs/toolkit";

// Part1: Define Slice (including reducers and actions)
const initialState = { likeValue: false };

const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    // increaseOne: (state) => {
    //   state.likeValue = state.likeValue + 1;
    // },
    // decreaseOne: (state) => {
    //   state.likeValue = state.likeValue - 1;
    // },
    detect: (state) => {
      state.likeValue = !state.likeValue;
    },
  },
});

// export state to global
export const selectLike = (state) => state.like.likeValue;

// export actions to global
export const { detect } = likeSlice.actions;

// export reducer to global
export default likeSlice.reducer;
