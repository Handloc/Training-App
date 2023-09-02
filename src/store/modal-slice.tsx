import { createSlice } from "@reduxjs/toolkit";

const initialModalState: { homeModalVisible: boolean } = {
  homeModalVisible: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState: initialModalState,
  reducers: {
    showHomePageModal(state) {
      state.homeModalVisible = true;
    },
    hideHomePageModal(state) {
      state.homeModalVisible = false;
    },
  },
});

export default modalSlice.reducer;
export const modalActions = modalSlice.actions;
