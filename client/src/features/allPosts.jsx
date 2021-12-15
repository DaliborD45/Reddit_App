import { createSlice } from "@reduxjs/toolkit";
const initialStateValue = { value: [] };

const allPosts = createSlice({
  name: "allPosts",
  initialState: initialStateValue,
  reducers: {
    setAllPosts: (state, action) => {
      state.value = action.payload;
    },
    addPost:(state, action) => {
        state.value.push(action.payload);
    },
    
  },
});
export const { setAllPosts,addPost} = allPosts.actions;
export default allPosts.reducer;
