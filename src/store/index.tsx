import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import usersReducer from "./users-slice";
import modalRecuder from "./modal-slice";

const store = configureStore({
  reducer: { auth: authReducer, users: usersReducer, modal: modalRecuder },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
