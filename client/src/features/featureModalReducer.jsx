import { createSlice } from "@reduxjs/toolkit";
const initialStateValue = { isOpen: false };

const featureModal = createSlice({
  name: "featureModal",
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
export const { setOpenModal, setCloseModal } = featureModal.actions;

export default featureModal.reducer;
