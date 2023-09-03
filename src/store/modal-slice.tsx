import { createSlice } from "@reduxjs/toolkit";

const initialModalState: { homeModalVisible: boolean; currentModal: string } = {
  homeModalVisible: false,
  currentModal: "",
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
    setCurrentModal(state, actions) {
      state.currentModal = actions.payload;
    },
  },
});

export default modalSlice.reducer;
export const modalActions = modalSlice.actions;
