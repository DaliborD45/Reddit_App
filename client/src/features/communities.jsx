import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialStateValue = { value: [], currentCommunity: [] };

export const fetchCommunities = createAsyncThunk("/communities", async () => {
  const response = await axios.get("http://localhost:3001/community");
  return response.data;
});

export const addCommunityThunk = createAsyncThunk(
  "/addCommunity",
  async (values) => {
    const { communityName, communityTypes, adultContent } = values;
    const response = await axios.post(
      "http://localhost:3001/community/createCommunity",
      { name: communityName, type: communityTypes, adultContent },
      {
        headers: {
          authToken: localStorage.getItem("accessToken"),
        },
      }
    );
    return response.data;
  }
);

export const fetchCommunitiesById = createAsyncThunk(
  "/communitiesById",
  async (id) => {
    const response = await axios.get(
      `http://localhost:3001/community/byId/${parseInt(id)}`
    );
    return response.data;
  }
);

const allCommunities = createSlice({
  name: "allCommunities",
  initialState: initialStateValue,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCommunities.fulfilled, (state, action) => {
      state.value = action.payload;
    });
    builder.addCase(fetchCommunitiesById.fulfilled, (state, action) => {
      state.currentCommunity = action.payload;
    });
    builder.addCase(addCommunityThunk.fulfilled, (state, action) => {
      state.value.push(action.payload);
    });

    builder.addCase(addCommunityThunk.rejected, (state, { error }) => {
      console.log(error);
    });
  },
});
export const { setAllCommunities, addCommunities } = allCommunities.actions;
export default allCommunities.reducer;
