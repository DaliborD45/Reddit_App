import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialStateValue = {
  value: [],
  currentCommunity: [],
  usersCommunities: [],
};

export const fetchCommunities = createAsyncThunk("/communities", async () => {
  const response = await axios.get("http://localhost:3001/community");
  return response.data;
});

export const updateCommunityThunk = createAsyncThunk(
  "/community",
  async () => {}
);

export const addCommunityThunk = createAsyncThunk(
  "/addCommunity",
  async (values) => {
    const { communityName, communityTypes, adultContent, description } = values;
    const response = await axios.post(
      "http://localhost:3001/community/createCommunity",
      { name: communityName, type: communityTypes, adultContent, description },
      {
        headers: {
          authToken: localStorage.getItem("accessToken"),
        },
      }
    );
    return response.data;
  }
);

export const fetchCommunitiesByUserId = createAsyncThunk(
  "/byUserId",
  async (values) => {
    const response = await axios.get(
      "http://localhost:3001/community/byUserId",
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
  reducers: {
    updateCommunityData: (state, action) => {
      state.value = action.payload;
    },
  },
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
    builder.addCase(fetchCommunitiesByUserId.fulfilled, (state, action) => {
      state.usersCommunities = action.payload;
    });
  },
});
export const { updateCommunityData } = allCommunities.actions;
export default allCommunities.reducer;
