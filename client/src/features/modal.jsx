import { createSlice } from "@reduxjs/toolkit";
const initialStateValue = { isOpen: false };

const modal = createSlice({
  name: "modal",
  initialState: initialStateValue,
  reducers: {
    setOpenModal: (state) => {
      state.isOpen = true;
    },
    setCloseModal: (state) => {
      state.isOpen = false;
    },
  },
});
export const { setOpenModal, setCloseModal } = modal.actions;
export default modal.reducer;
