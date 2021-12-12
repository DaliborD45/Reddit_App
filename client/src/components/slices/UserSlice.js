import { createSlice } from "@reduxjs/toolkit";

export const user = createSlice({
  name: "user",
  initialState: { availableCoins: 0 },
  reducers: {
    increase: (state, action) => {
      state.availableCoins += 1;
    },
    decrease: (state, action) => {
      state.availableCoins -= 1;
    },
  },
});
export const { setAvailableCoins } = user.actions;
export default user.reducer;
