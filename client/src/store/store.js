import { configureStore } from "@reduxjs/toolkit";
import currentUserReducer from "../features/currentUser";
import votesReducer from "../features/votes";
import allPostsReducer from "../features/allPosts";
import allCommentsReducer from "../features/allComments";

export const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
    allPosts: allPostsReducer,
    allComments: allCommentsReducer,
    votes: votesReducer,
  },
  devTools: true,
});
