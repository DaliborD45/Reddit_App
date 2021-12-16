import { createSlice } from "@reduxjs/toolkit";
const initialStateValue = { value: [] };

const allCommunities = createSlice({
  name: "allCommunities",
  initialState: initialStateValue,
  reducers: {
    setAllCommunities: (state, action) => {
      state.value = action.payload;
    },
    addCommunities: (state, action) => {
      state.value.push(action.payload);
    },
  },
});
export const { setAllCommunities, addCommunities } = allCommunities.actions;
export default allCommunities.reducer;
