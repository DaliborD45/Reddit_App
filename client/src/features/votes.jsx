import { createSlice } from "@reduxjs/toolkit";
const initialStateValue = { value: [], Upvoted: false, Downvoted: false };

const votes = createSlice({
  name: "votes",
  initialState: initialStateValue,
  reducers: {
    setAllVotes: (state, action) => {
      state.value = action.payload;
    },
    addUpVote: (state, action) => {
      state.value.push(action.payload);
    },
    setUpvote: (state, action) => {
      state.Upvoted = action.payload;
    },
    setDownvote: (state, action) => {
      state.Downvoted = action.payload;
    },
  },
});
export const { setAllVotes, addUpVote, setUpvote, setDownvote } = votes.actions;
export default votes.reducer;
