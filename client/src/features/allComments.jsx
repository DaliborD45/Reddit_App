import { createSlice } from "@reduxjs/toolkit";
const initialStateValue = { value: [] };

const allComments = createSlice({
  name: "allComments",
  initialState: initialStateValue,
  reducers: {
    setAllComments: (state, action) => {
      state.value = action.payload;
    },
    addComment: (state, action) => {
      state.value.push(action.payload);
    },
  },
});
export const { setAllComments, addComment } = allComments.actions;
export default allComments.reducer;
