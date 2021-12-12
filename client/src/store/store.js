import { configureStore } from "@reduxjs/toolkit";
import currentUserReducer from "../features/currentUser";
import votesReducer from "../features/votes";
import allPostsReducer from "../features/allPosts";
import allCommentsReducer from "../features/allComments";
import modalReducer from "../features/modal";
export const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
    allPosts: allPostsReducer,
    allComments: allCommentsReducer,
    votes: votesReducer,
    modal: modalReducer,
  },
  devTools: true,
});
