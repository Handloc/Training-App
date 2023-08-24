import { createSlice } from "@reduxjs/toolkit";

const initialAuthState: { isAuthenticated: boolean; currentUser: string } = {
  isAuthenticated: localStorage.getItem("isAuthenticated") === "true",
  currentUser: localStorage.getItem("currentUser") || "No user",
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.currentUser = action.payload;
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("currentUser", action.payload);
    },
    logout(state) {
      state.isAuthenticated = false;
      state.currentUser = "";
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("currentUser");
    },
  },
});

export default authSlice.reducer;
export const authActions = authSlice.actions;
