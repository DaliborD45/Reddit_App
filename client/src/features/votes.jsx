import { createSlice } from "@reduxjs/toolkit";
const initialStateValue = { value: [] };

const votes = createSlice({
  name: "votes",
  initialState: initialStateValue,
  reducers: {
    setAllVotes: (state, action) => {
      state.value = action.payload;
    },
    addUpVote:(state, action) => {
        state.value.push(action.payload);
    },
    
  },
});
export const { setAllPosts,addPost} = votes.actions;
export default votes.reducer;
