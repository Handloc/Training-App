import { createSlice } from "@reduxjs/toolkit";

const initialAuthState: { isAuthenticated: boolean; currentUser: string } = {
  isAuthenticated: false,
  currentUser: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.currentUser = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.currentUser = "";
    },
  },
});

export default authSlice.reducer;
export const authActions = authSlice.actions;
