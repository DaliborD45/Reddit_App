import { createSlice } from "@reduxjs/toolkit";
const initialStateValue = { value: [], filteredPostValue: [] };

const allPosts = createSlice({
  name: "allPosts",
  initialState: initialStateValue,
  reducers: {
    setAllPosts: (state, action) => {
      state.value = action.payload;
    },
    addPost: (state, action) => {
      state.value.push(action.payload);
    },
    setFilteredPosts: (state, action) => {
      state.filteredPostValue = action.payload;
    },
    addFilteredPost: (state, action) => {
      state.filteredPostValue.push(action.payload);
    },
  },
});
export const { setAllPosts, addPost, setFilteredPosts, addFilteredPost } =
  allPosts.actions;
export default allPosts.reducer;
