import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";

interface User {
  email: string;
  password: string;
}

const initialUsersState: { users: User[] } = {
  users: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState: initialUsersState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      const sendData = async () => {
        const res = await fetch("api/auth", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(action.payload),
        });
        const user_json: User = await res.json();
        state.users.push(user_json);
      };
    },
  },
});

export default usersSlice.reducer;
export const usersActions = usersSlice.actions;
