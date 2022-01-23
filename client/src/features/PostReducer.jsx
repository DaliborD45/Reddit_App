import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialStateValue = { value: [], filteredPostValue: [], commIdPosts: [] };

export const fetchPosts = createAsyncThunk("getPosts", async () => {
  try {
    const response = await axios.get("http://localhost:3001/posts");
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const getPostsByCommunityId = createAsyncThunk(
  "getPostsByCommunityId",
  async (id) => {
    const ressponse = await axios.get(
      `http://localhost:3001/posts/byCommunityId/${id}`
    );
    return ressponse.data;
  }
);

export const deletePostThunk = createAsyncThunk(
  "deletePost",
  async (PostId) => {
    const response = axios.delete(
      `http://localhost:3001/posts/deletePost/${parseInt(PostId)}`,
      {
        headers: {
          authToken: localStorage.getItem("accessToken"),
        },
      }
    );
    return response.data.id;
  }
);

export const addPostThunk = createAsyncThunk(
  "addPost",
  async (values, imageIdString) => {
    const { content, title, communityId } = values;

    const response = await axios.post(
      "http://localhost:3001/posts/addPost",
      {
        title,
        content,
        imageId: null,
        communityId: parseInt(communityId),
      },
      {
        headers: {
          authToken: localStorage.getItem("accessToken"),
        },
      }
    );
    return response.data;
  }
);

const allPosts = createSlice({
  name: "allPosts",
  initialState: initialStateValue,
  reducers: {
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
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.value = action.payload;
    });
   
    builder.addCase(deletePostThunk.fulfilled, (state, action) => {
      state.value = state.value.filter(({ id }) => id !== action.payload);
    });
    builder.addCase(getPostsByCommunityId.fulfilled, (state, action) => {
      state.commIdPosts = action.payload;
    });
  },
});
export const { setAllPosts, addPost, setFilteredPosts, addFilteredPost } =
  allPosts.actions;
export default allPosts.reducer;
