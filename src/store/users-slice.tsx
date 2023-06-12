import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface User {
  email: string;
  password: string;
}

interface AuthResponse {
  user: User;
}

const initialUsersState: { users: User[] } = {
  users: [],
};

export const addUser = createAsyncThunk("users/addUser", async (user: User) => {
  const res = await fetch("api/auth", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  const data: AuthResponse = await res.json();
  return data.user;
});

const usersSlice = createSlice({
  name: "users",
  initialState: initialUsersState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.users.push(action.payload);
    });
  },
});

export default usersSlice.reducer;
export const usersActions = usersSlice.actions;
