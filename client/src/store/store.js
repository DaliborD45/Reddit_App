import { configureStore } from "@reduxjs/toolkit";
import currentUserReducer from "../features/currentUser";
import allPostsReducer from "../features/allPosts"
export const store = configureStore({
  reducer: {
    currentUser:currentUserReducer,
    allPosts:allPostsReducer
  },
  devTools: true,
});
