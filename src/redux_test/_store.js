import { configureStore } from "@reduxjs/toolkit";
import likeReducer from "./_likeSlice";

// Part2: Combine Reducers and Create a Store
const store = configureStore({
  reducer: {
    like: likeReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

//  export store to global
export default store;
