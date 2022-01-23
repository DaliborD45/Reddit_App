import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialStateValue = { value: [] };
export const addCommentThunk = createAsyncThunk(
  "/addComment",
  async (value) => {
    const { content,PostId } = value;
    const response = await axios.post(
      "http://localhost:3001/comments",
      { postId: parseInt(PostId), content },
      {
        headers: {
          authToken: localStorage.getItem("accessToken"),
        },
      }
    );
    return response.data;
  }
);

export const fetchComments = createAsyncThunk(
  "/fetchComments",
  async (PostId) => {
    const response = await axios.get(
      `http://localhost:3001/comments/byId/${PostId}`
    );
    return response.data;
  }
);

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
  extraReducers: (builder) => {
    builder.addCase(addCommentThunk.fulfilled, (state, action) => {
      // Add user to the state array
      state.value = [...state.value, action.payload];
    });
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      // Add user to the state array
      state.value = action.payload;
    });
  },
});
export const { setAllComments, addComment } = allComments.actions;
export default allComments.reducer;
